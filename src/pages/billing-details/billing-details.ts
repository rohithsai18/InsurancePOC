import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccountServices} from '../../services/account-services';
import { Constants } from '../../constants';


@IonicPage()
@Component({
  selector: 'page-billing-details',
  templateUrl: 'billing-details.html',
})
export class BillingDetailsPage {
  billingData: any;
  accountDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public accountServices:AccountServices) {
  }

  ionViewDidLoad() {
  }

  ngOnInit() {
    this.billingData = this.accountServices.getBillingData();
    this.accountDetails = JSON.parse(Constants.accountDetails);
  }

}
