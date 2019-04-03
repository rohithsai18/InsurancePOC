import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AccountServices} from '../../services/account-services';

/**
 * Generated class for the AccountDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-dashboard',
  templateUrl: 'account-dashboard.html',
})


export class AccountDashboardPage implements OnInit{

  
  
  accntsList:Array<object>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public accntService:AccountServices) {
  }

  navToDetails(){
    this.navCtrl.push('AccountDetailsPage');
  }
  logOut(){
    this.navCtrl.popToRoot()
}

  ngOnInit(){
      this.accntsList=this.accntService.getAccntData().accounts['map']((account,index)=>(

         { 
           openActivities:account['numberOfOpenActivites']||0,
           accountCreated:account['accountCreatedDate'],
           policyCount:account['policySummaries'].length,
           holderName:account['accountHolder'],
           address:account['accountHolderAddress']

          }
      ));
      console.log(this.accntsList);
    
  }
  ionViewDidLoad() {
  }

}
