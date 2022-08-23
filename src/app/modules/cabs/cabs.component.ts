import { Component, OnInit, ViewChild } from '@angular/core';
import { Cab } from 'src/app/models/cab.model';
import { CabService } from 'src/app/services/cab.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cabs',
  templateUrl: './cabs.component.html',
  styleUrls: ['./cabs.component.css'],
})
export class CabsComponent implements OnInit {
  cabs: Cab[] = [];
  displayedColumns: string[] = ['id', 'model', 'number', 'owner'];
  dataSource = new MatTableDataSource(this.cabs);

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  constructor(private cabService: CabService) {}

  ngOnInit(): void {
    this.cabService.getCabs().subscribe((response: Cab[]) => {
      this.cabs = response;
      this.dataSource = new MatTableDataSource(this.cabs);
      this.dataSource.paginator = this.paginator;
      console.log(response);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
