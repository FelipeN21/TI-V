import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightHistoryGraphComponent } from './light-history-graph.component';

describe('LightHistoryGraphComponent', () => {
  let component: LightHistoryGraphComponent;
  let fixture: ComponentFixture<LightHistoryGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightHistoryGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightHistoryGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
