import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rootURL = `https://62fb9cb8abd610251c0d7310.mockapi.io/api/v1/cab`;
  title = 'project';
  
  constructor() { }
  
  ngOnInit(): void {


    // this.customerService.getCustomers().subscribe((response) => {
    //   console.log(response)
    // })

    // this.cabService.deleteCab(14).subscribe((response) => {
    //   console.log(response)
    // })

    // this.cabService.getCabById(13).subscribe((response) => {
    //   console.log(response)
    // })
  }
}
