import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Cab } from 'src/app/models/cab.model';
import { CabService } from 'src/app/services/cab.service';

@Component({
  selector: 'app-cabs-form',
  templateUrl: './cabs-form.component.html',
  styleUrls: ['./cabs-form.component.css'],
})
export class CabsFormComponent implements OnInit, OnDestroy {
  cabsForm: FormGroup = this.fb.group({
    owner: ['', Validators.required],
    model: ['', Validators.required],
    number: ['', Validators.required],
  });
  id: number | null = null;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    public fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cabService: CabService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.id = +params.get('id')!;
        if (this.id) {
          this.getCabInfo(this.id);
        }
      });
  }

  onSave(): void {
    const data = this.cabsForm.value;
    if (this.id) {
      this.editCab(data);
    } else {
      this.newCab(data);
    }
  }

  onGoBack(): void {
    this.router.navigate(['/cabs']);
  }

  private getCabInfo(id: number): void {
    this.cabService
      .getCabById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((cab) => {
        this.populateData(cab);
      });
  }

  private editCab(cabData: Cab): void {
    this.cabService
      .editCab(this.id!, cabData)
      .pipe(takeUntil(this.destroy$))
      .subscribe((cab) => {
        this.onGoBack();
      });
  }

  private newCab(cabData: Cab): void {
    this.cabService
      .addCab(cabData)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.onGoBack();
      });
  }

  private populateData(cabData: Cab): void {
    this.cabsForm.patchValue({
      ...cabData,
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
