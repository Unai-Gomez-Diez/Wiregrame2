import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBuzonesComponentComponent } from './widget-buzones-component.component';

describe('WidgetBuzonesComponentComponent', () => {
  let component: WidgetBuzonesComponentComponent;
  let fixture: ComponentFixture<WidgetBuzonesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetBuzonesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetBuzonesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
