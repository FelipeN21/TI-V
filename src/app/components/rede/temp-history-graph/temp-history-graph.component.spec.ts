import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempHistoryGraphComponent } from './temp-history-graph.component';

describe('TempHistoryGraphComponent', () => {
  let component: TempHistoryGraphComponent;
  let fixture: ComponentFixture<TempHistoryGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempHistoryGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempHistoryGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
