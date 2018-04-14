import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HospitalMapPage } from '../pages/hospital-map/hospital-map';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { TreatmentPage } from '../pages/treatment/treatment';
import { TabsPage } from '../pages/tabs/tabs';
import { BodyMappingPage } from '../pages/body-mapping/body-mapping';
import { AllSymptomsPage } from '../pages/all-symptoms/all-symptoms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { ListcomponentComponent } from '../components/listcomponent/listcomponent';

import { FirebaseConfig } from './dbConfig';
import { BodyMappingModalPage } from '../pages/body-mapping-modal/body-mapping-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HospitalMapPage,
    TabsPage,
    ContactPage,
    BodyMappingPage,
    AllSymptomsPage,
    ListcomponentComponent,
    TreatmentPage,
    BodyMappingModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HospitalMapPage,
    TabsPage,
    ContactPage,
    BodyMappingPage,
    AllSymptomsPage,
    TreatmentPage,
    BodyMappingModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
