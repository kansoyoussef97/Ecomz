import { Component, OnInit, ViewChild } from '@angular/core';
import { Cab } from 'src/app/models/cab.model';
import { CabService } from 'src/app/services/cab.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-cabs',
  templateUrl: './cabs.component.html',
  styleUrls: ['./cabs.component.css'],
})
export class CabsComponent implements OnInit {
  cabs: Cab[] = [];
  loading: boolean = true;
  searchValue: string = '';
  displayedColumns: string[] = ['id', 'model', 'number', 'owner', 'actions'];
  dataSource = new MatTableDataSource(this.cabs);
  private destroy$: Subject<void> = new Subject<void>();

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  constructor(private cabService: CabService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getCabs();
  }

  getCabs(): void {
    this.cabService
    .getCabs()
    .pipe(takeUntil(this.destroy$))
    .subscribe((response: Cab[]) => {
      this.loading = false;
      this.cabs = response;
      this.dataSource = new MatTableDataSource(this.cabs);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(cabId: number) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          title: 'Delete Cab',
          content: 'Are you sure you want to delete this Cab',
        },
      })
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result) {
          this.deleteCab(cabId);
        }
      });
  }

  deleteCab(cabId: number): void {
    this.loading = true;
    this.cabService
      .deleteCab(cabId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        console.log(response)
        this.getCabs();
        this.searchValue = '';
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
