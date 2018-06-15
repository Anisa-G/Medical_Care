import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-treatment',
  templateUrl: 'treatment.html',
})
export class TreatmentPage {

  // items: Observable<any[]>;
  listOfDeseases: any[];

  constructor(public navCtrl: NavController, private http: Http) {
    let localData = this.http.get("assets/json/deseases.json").map(res => res.json().trajnimi[0].Semundjet);
      localData.subscribe(data => {
        this.listOfDeseases = data;
        console.log(this.listOfDeseases)
      });
  }

}
