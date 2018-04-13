import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { TreatmentPage } from '../pages/treatment/treatment';
import { BodyMappingPage } from '../pages/body-mapping/body-mapping';
import { AllSymptomsPage } from '../pages/all-symptoms/all-symptoms';


@Component({
  templateUrl: 'app.html'

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  @ViewChild('myTabs') tabRef: TabsPage;

  rootPage: any = TabsPage;

  pages: Array<{ title: string, component: any, img: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, img: "../assets/imgs/heard.png" },
      { title: 'Spitalet', component: ListPage, img: "../assets/imgs/building.png" },
      { title: 'Diagnoza', component: TreatmentPage, img: "../assets/imgs/stetoscope.png"  },
      { title: 'Pjeset e Trupit', component: BodyMappingPage, img: "../assets/imgs/body mapping.png"  },
      { title: 'Simptomat', component: AllSymptomsPage, img: "../assets/imgs/list.png"  },
      { title: 'Kontakto', component: ContactPage, img: "../assets/imgs/contact.png" }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if (page.title == "Home") {
      this.nav.setRoot(TabsPage);
    } else {
      this.nav.setRoot(page.component);
    }
  }
}
