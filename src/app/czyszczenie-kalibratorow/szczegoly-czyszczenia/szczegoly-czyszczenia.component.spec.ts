import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzczegolyCzyszczeniaComponent } from './szczegoly-czyszczenia.component';

describe('SzczegolyCzyszczeniaComponent', () => {
  let component: SzczegolyCzyszczeniaComponent;
  let fixture: ComponentFixture<SzczegolyCzyszczeniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzczegolyCzyszczeniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzczegolyCzyszczeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
