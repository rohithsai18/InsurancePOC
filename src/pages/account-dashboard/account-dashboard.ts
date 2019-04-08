import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-account-dashboard',
  templateUrl: 'account-dashboard.html',
})


export class AccountDashboardPage implements OnInit{

  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navToPage(pageName){
    switch(pageName){
      case 'billing': this.navCtrl.push(
                        'BillingDetailsPage'
                      );break;
   
    case 'account': this.navCtrl.push('AccountDetailsPage');break;

    case 'claim': this.navCtrl.push('ViewClaimsPage');break;

    default:''
    }
  }
  logOut(){
    this.navCtrl.popToRoot()
}

  ngOnInit(){
    
  }
  ionViewDidLoad() {
  }

}
