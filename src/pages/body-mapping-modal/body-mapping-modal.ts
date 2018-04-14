import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

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
  segment: any = "";

  part;
  partForm;
  constructor(private navParams: NavParams, private viewCtrl: ViewController) {
    this.excludedTrackNames = this.navParams.data;

    this.partForm = new FormGroup({
      "part": new FormControl({disabled: false})
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  getSelectedPart($event) {
    console.log(this.partForm.value.part);
  }
}
