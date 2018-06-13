import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
//, ViewChild, OnInit, Renderer
//import { NavController, NavParams, CardContent } from 'ionic-angular';

import { HospitalMapPage } from '../hospital-map/hospital-map';
// import { CONSTANTS } from '@firebase/util';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {


  listOfQytete: any[];
  listOfSpitale: any[];
  listOfDepatamente: any[];
  qytete: string = "";

  constructor(public navParams: NavParams, private http: Http) {    
    let localData = this.http.get("assets/json/list_spitale.json").map(res => res.json());
    localData.subscribe(data => {
      this.listOfSpitale = data.qytete;
    });
  }


  optionDepartamente(item) {
    this.qytete = item;
    // console.log(this.qytete)
  }

  optionSpitale(item) {
    console.log(item)
  }

  optionQytete(item) {
    console.log(item)
  }
    findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  }

}

