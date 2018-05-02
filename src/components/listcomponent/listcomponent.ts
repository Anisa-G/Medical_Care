import { Component, Renderer, OnInit, ViewChild, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
// import { AngularFireList } from 'angularfire2/database';
//  import { HospitalMapPage} from '../../pages/hospital-map/hospital-map';

@Component({
  selector: 'listcomponent',
  templateUrl: 'listcomponent.html'
})
export class ListcomponentComponent implements OnInit {
  items: string[];

  accordionExapanded = false;
  @ViewChild("cc") cardContent: any;
  @Input('title') title: string;
  ObsItem: Observable<string[]>;

  icon: string = "arrow-forward";
  private arrData;
  arrToBeDesp = [];



  constructor(public renderer: Renderer, public navCntr: NavController, public navCtrl: NavController, public afDB: AngularFireDatabase) {

  }

  ngOnInit() {
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
    try {
        this.afDB.object('/Sys/Spitalet/' + title).snapshotChanges().subscribe(
        data => {
          this.arrData = data;
          this.arrToBeDesp = this.arrData;
          // console.log(this.arrToBeDesp);
          console.log(this.arrData);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}
