import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillingDetailsPage } from './billing-details';

@NgModule({
  declarations: [
    BillingDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BillingDetailsPage),
  ],
})
export class BillingDetailsPageModule {}
