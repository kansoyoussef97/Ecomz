import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  loading: boolean = true;
  searchValue: string = '';
  customers: Customer[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'city',
    'country',
    'street',
    'actions',
  ];
  dataSource = new MatTableDataSource(this.customers);
  private destroy$: Subject<void> = new Subject<void>();

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  constructor(
    private customerService: CustomerService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService
      .getCustomers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: Customer[]) => {
        this.loading = false;
        this.customers = response;
        this.dataSource = new MatTableDataSource(this.customers);
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
          title: 'Delete Customer',
          content: 'Are you sure you want to delete this Customer',
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
    this.customerService
      .deleteCustomer(cabId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.getCustomers();
        this.searchValue = '';
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
