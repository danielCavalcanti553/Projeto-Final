import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicial-cliente',
  templateUrl: './inicial-cliente.page.html',
  styleUrls: ['./inicial-cliente.page.scss'],
})
export class InicialClientePage implements OnInit {

  constructor(private menuCtrl : MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

}
