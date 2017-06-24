import { Injectable } from '@angular/core';

@Injectable()
export class CitiesService {

  constructor() { }
  cities:any = ['London', 'Paris', 'Tel Aviv', 'NYC'];
  getCities(){
    return this.cities;
  }
}
