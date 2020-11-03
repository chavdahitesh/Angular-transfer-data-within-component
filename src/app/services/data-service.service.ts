import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  sharedData:any;
  DataShare = [
    { id: 1, name: "Heyy", email: 'heyy@io.in' },
    { id: 2, name: "HEllo", email: 'hello@ioj.in' },
    { id: 3, name: "sayonara", email: 'sayonara@ioj.in' }
  ]
  constructor() { 
    this.sharedData = this.DataShare
  }
}
