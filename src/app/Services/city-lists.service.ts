import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import {CityList} from '../Interfaces/city-list';

@Injectable()
export class CityListsService {
    private cityList;
    private urlCityList = "https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty&location=";
    private urlReviews = "https://api.airbnb.com/v2/reviews?client_id=3092nxybyb0otqw18e8nh5nty&role=guest&listing_id=";
    private item;

  constructor(private _http:Http) { }

  getList(city): Observable<CityList[]>{
      var url = this.urlCityList +city;
    return this._http.get(url)
        .map(res => res.json());
  }
    getReviews(listingId): Observable<CityList[]>{
        var url = this.urlReviews +listingId;
        return this._http.get(url)
            .map(res => res.json());
    }
}
