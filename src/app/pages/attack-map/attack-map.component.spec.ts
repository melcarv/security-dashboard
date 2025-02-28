import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackMapComponent } from './attack-map.component';

describe('AttackMapComponent', () => {
  let component: AttackMapComponent;
  let fixture: ComponentFixture<AttackMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttackMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttackMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
