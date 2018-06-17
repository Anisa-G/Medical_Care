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

  onSlideChangeStart(slider: Slides ) {
    slider.lockSwipes(false)
  }




}
