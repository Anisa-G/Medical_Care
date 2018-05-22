import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//, ViewChild, OnInit, Renderer
//import { NavController, NavParams, CardContent } from 'ionic-angular';

import { HospitalMapPage } from '../hospital-map/hospital-map';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
}

