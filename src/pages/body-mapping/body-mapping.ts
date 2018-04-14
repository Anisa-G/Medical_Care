import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BodyMappingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-body-mapping',
  templateUrl: 'body-mapping.html',
})
export class BodyMappingPage {

  private listOfPart: any = [];
  private segment = 'organe';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.changeBodyLevelToStart(this.segment);
  }

  changeBodyLevelToStart(value) {
    this.segment = value;
    if (this.segment === 'organe') {
      this.listOfPart = this.organe;
    } else if (this.segment === 'sisteme') {
      this.listOfPart = this.sisteme;
    } else {
      console.log("There is an error ");
    }

  }


  organe = [
    "Veshka",
    "Melcia",
    "Mushkrit",
    "Zemra",
    "Trakeja",
    "Lekura"
  ];


  sisteme = [
    "Sistemi qarkullimit te gjakut",
    "Sistemi i tretjes ",
    "Sisemi nervor",
    "Sistemi frymkembimit"
  ];
}
