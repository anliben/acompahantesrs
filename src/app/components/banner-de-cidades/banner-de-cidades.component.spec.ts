import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDeCidadesComponent } from './banner-de-cidades.component';

describe('BannerDeCidadesComponent', () => {
  let component: BannerDeCidadesComponent;
  let fixture: ComponentFixture<BannerDeCidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerDeCidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDeCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
