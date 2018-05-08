import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BodyMappingModalPage } from './body-mapping-modal';

@NgModule({
  declarations: [
    BodyMappingModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BodyMappingModalPage),
  ],
})
export class BodyMappingModalPageModule {}
