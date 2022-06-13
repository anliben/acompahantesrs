import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaPaginaComponent } from './sua-pagina.component';

describe('SuaPaginaComponent', () => {
  let component: SuaPaginaComponent;
  let fixture: ComponentFixture<SuaPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
