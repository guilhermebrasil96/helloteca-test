import { Component, OnInit } from "@angular/core";
import { MenuItem, Message } from 'primeng/api';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: "app-list-page",
  templateUrl: "./list-page.component.html",
  styleUrls: ["./list-page.component.css"],
})
export class ListPageComponent implements OnInit {
  breadCrumbItems : MenuItem[] = [
    { label: 'Usuarios' },
    { label: 'List' },
  ]
  home = {icon: 'pi pi-home', routerLink: '/'};

  constructor(public nav: NavbarService) {}

  ngOnInit(): void {
    this.nav.show()
  }

}
