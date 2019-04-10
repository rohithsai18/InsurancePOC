import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountServices } from '../../services/account-services';


@IonicPage()
@Component({
  selector: 'page-claim-details',
  templateUrl: 'claim-details.html',
})
export class ClaimDetailsPage implements OnInit{
  claimDetails;

  constructor(public navCtrl: NavController, public navParams: NavParams,public accountServices:AccountServices) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClaimDetailsPage');
  }

  ngOnInit(){
     this.claimDetails = this.accountServices.getClaimsDetailsData();
  }
  logOut(){
    this.navCtrl.popToRoot();
  }

}
