import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewClaimsPage } from './view-claims';

@NgModule({
  declarations: [
    ViewClaimsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewClaimsPage),
  ],
})
export class ViewClaimsPageModule {}
