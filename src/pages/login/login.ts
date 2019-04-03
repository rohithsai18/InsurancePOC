import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  userForm:FormGroup;
  email:FormControl;
  password:FormControl;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  ngOnInit(){
    this.userForm = new FormGroup({
      'email':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    });
  }
  navToReg(){
    this.navCtrl.push('RegistrationPage');
  }
  onSubmit() {
    this.navCtrl.push('AccountDashboardPage');
  }

}
