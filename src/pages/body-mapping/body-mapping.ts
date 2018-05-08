import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { BodyMappingModalPage } from '../body-mapping-modal/body-mapping-modal';

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

  constructor(private modalCtrl: ModalController) {
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

  showModal() {

    let modal = this.modalCtrl.create(BodyMappingModalPage, this.listOfPart);
    modal.present();

   }

  organe = [
    "Veshka",
    "Melcia",
    "Mushkrit",
    "Zemra",
    "Trakeja",
    "Lekura"];


  sisteme = [
    "Sistemi qarkullimit te gjakut",
    "Sistemi i tretjes ",
    "Sisemi nervor",
    "Sistemi frymkembimit"];







}
