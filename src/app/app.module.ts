import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from '@angular/http';//import
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HospitalMapPage } from '../pages/hospital-map/hospital-map';
import { ListPage } from '../pages/list/list';
import { InfopartPage } from '../pages/infopart/infopart';
import { TreatmentPage } from '../pages/treatment/treatment';
import { BodyMappingPage } from '../pages/body-mapping/body-mapping';
import { AllSymptomsPage } from '../pages/all-symptoms/all-symptoms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { FirebaseConfig } from './dbConfig';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HospitalMapPage,
    BodyMappingPage,
    AllSymptomsPage,
    TreatmentPage,
    InfopartPage,
  ],
  imports: [
    BrowserModule,
    IonicModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HospitalMapPage,
    BodyMappingPage,
    AllSymptomsPage,
    TreatmentPage,
    InfopartPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
