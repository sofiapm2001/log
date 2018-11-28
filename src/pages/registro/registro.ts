import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  name= '';
  user= '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name= this.navParams.get('name');
    this.user=this.navParams.get('usuarios');
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
