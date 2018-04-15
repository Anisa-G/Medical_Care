import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-all-symptoms',
  templateUrl: 'all-symptoms.html',
})
export class AllSymptomsPage {

  showSkip = true;

  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

  ionViewWillEnter() {
    this.slides.update();
  }

}
