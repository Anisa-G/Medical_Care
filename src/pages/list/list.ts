import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
//, ViewChild, OnInit, Renderer
//import { NavController, NavParams, CardContent } from 'ionic-angular';

import { HospitalMapPage } from '../hospital-map/hospital-map';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {


  listOfQytete: any[];
  listOfSpitale: any[];
  listOfDepatamente: any[];

  constructor(public navParams: NavParams, private http: Http) {
    
    let localData = this.http.get("assets/json/list_spitale.json").map(res => res.json());
    console.log(localData)
    localData.subscribe(data => {
      // console.log(data);
      this.listOfQytete =Object.keys(data);
      console.log(this.listOfQytete);
    });
  }


  optionDepartamente(item) {
    console.log(item)
  }

  optionSpitale(item) {
    console.log(item)
  }

  optionQytete(item) {
    console.log(item)
  }

}

