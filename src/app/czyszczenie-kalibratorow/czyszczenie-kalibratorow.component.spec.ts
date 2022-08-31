import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzyszczenieKalibratorowComponent } from './czyszczenie-kalibratorow.component';

describe('CzyszczenieKalibratorowComponent', () => {
  let component: CzyszczenieKalibratorowComponent;
  let fixture: ComponentFixture<CzyszczenieKalibratorowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CzyszczenieKalibratorowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CzyszczenieKalibratorowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
