import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the ListOfTreatmentDeseasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-of-treatment-desease',
  templateUrl: 'list-of-treatment-desease.html',
})
export class ListOfTreatmentDeseasePage {

  listOfDeseases: any[];

  constructor(public navCtrl: NavController, private http: Http) {
    let localData = this.http.get("assets/json/deseases.json").map(res => res.json().trajnimi[0].Semundjet);
    localData.subscribe(data => {
      this.listOfDeseases = data;
      console.log(this.listOfDeseases)
    });
  }


  showInfoDesease(name) {
    console.log(name)
    // console.log(this.listOfDeseases[this.findWithAttr(this.listOfDeseases, 'sName', name)])
    // this.navCtrl.push(ShowInfoDeseasePage, this.listOfDeseases[this.findWithAttr(this.listOfDeseases, 'sName', name)]);
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
