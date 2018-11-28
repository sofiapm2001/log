import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { RegistroPage } from '../registro/registro';
import { IniciarPage } from '../iniciar/iniciar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name = ""; //es el correo
  user = [];
  contra = "";
  registro = RegistroPage
  iniciar = IniciarPage

  constructor(public navCtrl: NavController, public storage: Storage, public alertCtrl: AlertController) {
    
    this.storage.keys()
        .then(keys => {
          if (keys.some(key => key == 'correo')){
            this.storage.get('name')
            .then(user =>{
              this.user = JSON.parse(user);
            })
          }
        })


  }
  clickRegis() {
    if (this.contra.length>8){
      this.name.push({
        name = this.name});
        this.name = "";
        this.storage.set('name', JSON.stringify(this.user));
    };
   
    else {
      console.log('la contraseña no tiene 8 letras');
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'Porfavor completar',
        buttons: ['OK']
      });
      alert.present();
    }
 
    }
    clicksesion(){

    }
    
    

}
