import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
  profileItems: MenuItem[];
    
  constructor( public nav: NavbarService ) { }

  ngOnInit() {
    this.items = [
      {
          label: 'Usuarios',
          icon: 'pi pi-fw pi-users',
          items: [
              {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/list/1']}
          ]
      }
    ]; 

    this.profileItems = [
      {
         label:'Log Out',
         icon:'pi pi-fw pi-power-off',
      }
    ];
  }


}
