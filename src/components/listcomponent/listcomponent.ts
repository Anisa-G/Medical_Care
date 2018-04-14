import { Component, Renderer, OnInit, ViewChild, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { HospitalMapPage} from '../../pages/hospital-map/hospital-map';
/**
 * Generated class for the ListcomponentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'listcomponent',
  templateUrl: 'listcomponent.html'
})
export class ListcomponentComponent implements OnInit {

  // text: string;

  // constructor() {
  //   console.log('Hello ListcomponentComponent Component');
  //   this.text = 'Hello World';
  // }

  items: string[];

  accordionExapanded = false;
 @ViewChild("cc") cardContent: any;
 @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer, public navCntr: NavController) {
    // this.initializeItems();
  }

  ngOnInit() {
    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  toggleList() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 5px");

    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");

    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }

  // initializeItems() {
  //   this.items = [
  //     'Nene Tereza',
  //     'Ushtarak'

  //   ];
  // }
  goHospitalAsked(title){
    console.log(title);
    // this.initializeItems();
  }
}
