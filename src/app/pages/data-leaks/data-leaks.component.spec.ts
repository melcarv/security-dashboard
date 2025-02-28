import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLeaksComponent } from './data-leaks.component';

describe('DataLeaksComponent', () => {
  let component: DataLeaksComponent;
  let fixture: ComponentFixture<DataLeaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataLeaksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataLeaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
