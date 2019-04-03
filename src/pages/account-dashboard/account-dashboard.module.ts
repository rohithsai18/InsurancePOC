import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountDashboardPage } from './account-dashboard';

@NgModule({
  declarations: [
    AccountDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountDashboardPage),
  ],
})
export class AccountDashboardPageModule {}
