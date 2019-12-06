import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPanelForecastComponent } from './info-panel-forecast.component';

describe('InfoPanelForecastComponent', () => {
  let component: InfoPanelForecastComponent;
  let fixture: ComponentFixture<InfoPanelForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPanelForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPanelForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
