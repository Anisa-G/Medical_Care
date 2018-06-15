import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { HospitalMapPage } from '../hospital-map/hospital-map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  listOfSpitale: any[];
  listOfDepatamente: any[];
  pos:any = {};;

  constructor(public navParams: NavParams, private http: Http, private navCtrl: NavController) {
    this.reloadData();
  }

  optionQytete(item) {
    this.listOfDepatamente = this.listOfDepatamente[this.findWithAttr(this.listOfDepatamente, "name", item)]["departament"];
    console.log(this.listOfDepatamente)
  }

  optionLloje(item) {
    this.listOfSpitale = this.listOfSpitale[this.findWithAttr(this.listOfSpitale, "sName", item)][item];
    this.listOfDepatamente = this.listOfSpitale;
  }

  optionPos(item) {
    this.pos = this.listOfDepatamente[this.findWithAttr(this.listOfDepatamente, "dName", item)]["pos"];
    console.log(this.pos)
  }

  findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  }

  reloadData(){
    let localData = this.http.get("assets/json/list_spitale.json").map(res => res.json());
    localData.subscribe(data => {
      this.listOfSpitale = data.qytete;
    });
    
  }

  goToMap(){
    this.navCtrl.push(HospitalMapPage,this.pos);
  }

}

