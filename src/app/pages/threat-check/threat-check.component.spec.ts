import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatCheckComponent } from './threat-check.component';

describe('ThreatCheckComponent', () => {
  let component: ThreatCheckComponent;
  let fixture: ComponentFixture<ThreatCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreatCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreatCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
