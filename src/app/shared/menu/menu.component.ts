import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  sideMenu: boolean = false;
  @Input() estados?: string;

  constructor() { }

  ngOnInit(): void {
  }

  switchMenu(){
    this.sideMenu = !this.sideMenu;
  }
}
