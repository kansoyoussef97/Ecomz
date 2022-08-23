import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  displayedColumns: string[] = ['id', 'name', 'city', 'country', 'street'];
  dataSource = new MatTableDataSource(this.customers);
  private destroy$: Subject<void> = new Subject<void>();

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService
      .getCustomers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: Customer[]) => {
        this.customers = response;
        this.dataSource = new MatTableDataSource(this.customers);
        this.dataSource.paginator = this.paginator;
        console.log(response);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
