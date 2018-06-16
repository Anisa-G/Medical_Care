import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-all-symptoms',
  templateUrl: 'all-symptoms.html',
})
export class AllSymptomsPage {

  showSkip = true;

  @ViewChild('slides') slides: Slides;
  @ViewChild('age') age;
  @ViewChild('descDesesase') descDesesase;
  @ViewChild('medication') medication;
  @ViewChild('prevMedication') prevMedication;
  @ViewChild('nowState') nowState;

  constructor(public navCtrl: NavController) {


  }

  onSlideChangeStart(slider: Slides) {
     this.showSkip = !slider.isEnd();
    console.log(this.slides.getActiveIndex());

  }

  ionViewWillEnter() {
    this.slides.update();
  }

  // goToNext(index) {
    // switch (index) {
    //   case 0:
    //     if (this.age.value != null) {
    //       this.slides.lockSwipeToNext(true);
    //     } else {
    //       this.slides.lockSwipeToNext(false);
    //     }
    //     break;
    //   case 1:
    //     if (this.descDesesase.value != null) {
    //       this.slides.lockSwipeToNext(true);
    //     } else {
    //       this.slides.lockSwipeToNext(false);
    //     }
    //     break;
    //   case 2:
    //     if (this.medication.value != null || this.prevMedication.value) {
    //       this.slides.lockSwipeToNext(true);
    //     } else {
    //       this.slides.lockSwipeToNext(false);
    //     }
    //     break;
    //   case 3:
    //     if (this.nowState.value != null) {
    //       this.slides.lockSwipeToNext(true);
    //     } else {
    //       this.slides.lockSwipeToNext(false);
    //     }
    //     break;

    //   default:
    //     this.slides.lockSwipeToNext(false);
    //     break;
    // }
  // }

}
