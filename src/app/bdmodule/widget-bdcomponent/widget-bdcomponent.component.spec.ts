import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBDComponentComponent } from './widget-bdcomponent.component';

describe('WidgetBDComponentComponent', () => {
  let component: WidgetBDComponentComponent;
  let fixture: ComponentFixture<WidgetBDComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetBDComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetBDComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
