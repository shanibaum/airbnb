import {Component, Input, OnInit} from '@angular/core';
import {CitiesService} from "../../Services/cities.service";
import {CityListsService} from "../../Services/city-lists.service";
import {CityList} from '../../Interfaces/city-list';
import {Reviews} from '../../Interfaces/reviews';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import {NgProgressService} from "ng2-progressbar";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
    public cityListInfo:CityList[];

  constructor(private cities:CitiesService,private _cityListService:CityListsService,
              private modal:Modal,private pService: NgProgressService) {
  }

  cityList:any =[];
  reviewsArr:any =[];
  city:string = "";
  showList:boolean = false;
  @Input() selectedItem: any;

  ngOnInit() {
      this.cityList = this.cities.getCities();
  }
    onCityChange(city){
      if(city){
          this.pService.start();
          this._cityListService.getList(city).subscribe(cityListInfo =>
              {
                  var tmpArray:any = [];
                  var items = (cityListInfo as any).search_results;
                  items.forEach(function(item){
                      tmpArray.push(item.listing)
                  });
                  this.cityListInfo = tmpArray;
                  this.pService.done();
              }
          );
          this.showList = true;
      }
      else{
          this.showList = false;
      }
  }
    showReview(listing){
        this.pService.start();
        if(listing.reviews_count){
            this._cityListService.getReviews(listing.id).subscribe(reviewsArr =>
                {
                    var tmpArray:any = [];
                    var items = (reviewsArr as any).reviews;
                    items.forEach(function(item){
                        tmpArray.push(item)
                    });
                    this.reviewsArr = tmpArray;
                    var str = '<img src='+listing.picture_url+'><div class="font-weight-bold">'+listing.neighborhood+'</div>' +
                        '<h4 class="m-3">Reviews: </h4>';
                    for (let review of this.reviewsArr) {
                        str += '<div class="m-1">' +
                                  '<div class="font-weight-bold">' + (review as any).author.first_name + ': </div><div class="offset-md-1">' + (review as any).comments + '</div>' +
                            '</div>';
                    }
                        this.modal.alert()
                        .title(listing.name)
                        .body(str)
                        .open();
                    this.pService.done();
                }
            );
        }

}
}
