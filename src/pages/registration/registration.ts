import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage implements OnInit {

  registrationForm:FormGroup;
  username:FormControl;
  password:FormControl;
  confirmPassword:FormControl;
  email:FormControl;
  confirmEmail:FormControl;
  dateOfBirth:FormControl;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 

 
  ngOnInit(){
    this.registrationForm=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      confirmPassword:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      confirmEmail:new FormControl('',Validators.required),
      dateOfBirth:new FormControl('',Validators.required)
  })
}

register(){
  console.log(
    this.registrationForm
  )
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
