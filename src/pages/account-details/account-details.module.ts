import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountDetailsPage } from './account-details';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AccountDetailsPage
    
  ],
  imports: [
    IonicPageModule.forChild(AccountDetailsPage),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountDetailsPageModule {}
