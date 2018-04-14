import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BodyMappingModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-body-mapping-modal',
  templateUrl: 'body-mapping-modal.html',
})
export class BodyMappingModalPage {
  private excludedTrackNames: any[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private viewCtrl: ViewController) {
    this.excludedTrackNames = this.navParams.data;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
