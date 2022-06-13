import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title?: string;
  @Input() message?: string;
  @Input() mostrar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle () {
      this.mostrar = !this.mostrar;
  }

}
