import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nome = null;
  classe = "normal";

  constructor(public navCtrl: NavController, public navParams: NavParams, private fbd : AngularFireDatabase) {
    this.getPessoa();
  }

  getPessoa() {
    this.fbd.list('/portarias/-Kxj8DMEiAEuqU_GrOli').subscribe( row => {
      this.nome = row[0].$value;
      this.classe = row[1].$value ? "panico" : "normal";
    });
  }

}
