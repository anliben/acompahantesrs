import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  sideMenu: boolean = false;
  token = localStorage.getItem('token') as string;

  @Input() estados?: string;

  constructor(private router: Router) { }

  ngOnInit(): void {    
  }

  switchMenu(){
    this.sideMenu = !this.sideMenu;
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['/']);
    
  }
}
