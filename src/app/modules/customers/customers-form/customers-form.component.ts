import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.css'],
})
export class CustomersFormComponent implements OnInit {
  customersForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    street: ['', Validators.required],
  });
  id: number | null = null;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    public fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.id = +params.get('id')!;
        if (this.id) {
          this.getCustomerInfo(this.id);
        }
      });
  }

  onSave(): void {
    const data = this.customersForm.value;
    const dataToBeSent: Customer = {
      name: data.name,
      address: {
        city: data.city,
        country: data.country,
        street: data.street,
      },
    };
    if (this.id) {
      this.editCustomer(dataToBeSent);
    } else {
      this.newCustomer(dataToBeSent);
    }
  }

  onGoBack(): void {
    console.log(11);
    this.router.navigate(['/customers']);
  }

  private getCustomerInfo(id: number): void {
    this.customerService
      .getCustomerById(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((customer) => {
        this.populateData(customer);
      });
  }

  private editCustomer(customerData: Customer): void {
    console.log(customerData, 'edit');
    this.customerService
      .editCustomer(this.id!, customerData)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.onGoBack();
      });
  }

  private newCustomer(customerData: Customer): void {
    console.log(customerData, 'new');
    this.customerService
      .addCustomer(customerData)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.onGoBack();
      });
  }

  private populateData(customerData: Customer): void {
    this.customersForm.patchValue({
      ...customerData,
      city: customerData.address.city,
      country: customerData.address.country,
      street: customerData.address.street,
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
