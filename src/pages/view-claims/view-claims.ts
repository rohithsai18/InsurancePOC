import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AccountServices} from '../../services/account-services';

/**
 * Generated class for the ViewClaimsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-claims',
  templateUrl: 'view-claims.html',
})
export class ViewClaimsPage implements OnInit{

  claimsList:Array<object>

  constructor(public navCtrl: NavController, public navParams: NavParams, public accountService:AccountServices) {
  }
  logOut(){
    this.navCtrl.popToRoot();
  }
  navToViewDetails(){
    this.navCtrl.push('ClaimDetailsPage');
  }
  ngOnInit(){
    console.log(this.accountService.getClaimsList());
    this.claimsList=this.accountService.getClaimsList();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewClaimsPage');
  }

}
