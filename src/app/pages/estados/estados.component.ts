import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadosService } from './estados.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss'],
})
export class EstadosComponent implements OnInit {
  cidades: any[] = [];

  constructor(
    private router: Router,
    private estados: EstadosService
    ) {}

  ngOnInit(): void {
    this.cidades = this.estados.getCidades();
  }

  changeScreen(local: string) {
    this.router.navigate([
      '/',
      local.split(' ').join('-').toLowerCase(),
    ]);
  }

}
