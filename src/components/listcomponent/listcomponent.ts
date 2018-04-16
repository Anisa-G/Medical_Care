import { Component, Renderer, OnInit, ViewChild, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
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
  items: string[];

  accordionExapanded = false;
  @ViewChild("cc") cardContent: any;
  @Input('title') title: string;
  ObsItem: Observable<any[]>;

  icon: string = "arrow-forward";
  private arrData = [];

  constructor(public renderer: Renderer, public navCntr: NavController, public navCtrl: NavController, public afDB: AngularFireDatabase) {
    //  afDB.list('Sys').valueChanges().subscribe(_data => {
    //   this.arrData = _data;
    //   console.log(this.arrData[0].title);
    //  });

  // this.ObsItem.subscribe(_data => {
  //   this.arrData = _data;
  //   console.log(_data);
  // });


  // this.afDB.list("/myItems/").subscribe(_data => {
  //   this.arrData = _data;

  //   console.log(this.arrData);
  // });
  //  this.afDB.list('/Sys/').valueChanges(_data =>{
  //     this.arrData = _data;
  //     console.log(this.arrData);
  //   });


  // console.log(this.ObsItem);

}

ngOnInit() {
  // console.log(this.cardContent.nativeElement);
  this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
}

toggleList() {
  if (this.accordionExapanded) {
    this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
    this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 5px");

  } else {
    this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "400px");
    this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");

  }

  this.accordionExapanded = !this.accordionExapanded;
  this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

}


goHospitalAsked(title) {
  this.afDB.list('Sys/'+title).valueChanges().subscribe(_data => {
    this.arrData = _data;
    console.log(this.arrData[0]);
   });
}
}
