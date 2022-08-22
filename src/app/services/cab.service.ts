import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CabService {
  rootURL = `https://62fb9cb8abd610251c0d7310.mockapi.io/api/v1/cab`;

  constructor(private http: HttpClient) { }

  getCabs() {
    return this.http.get(this.rootURL);
  }

  getCabById(cabId: number) {
    return this.http.get(this.rootURL + `/${cabId}`);
  }

  addCab(cabData: any) {
    return this.http.post(this.rootURL, cabData);
  }

  editCab(cabId: number, cabData: any) {
    return this.http.put(`${this.rootURL}/${cabId}`, cabData);
  }

  deleteCab(cabId: number) {
    return this.http.delete(`${this.rootURL}/${cabId}`)
  }
}