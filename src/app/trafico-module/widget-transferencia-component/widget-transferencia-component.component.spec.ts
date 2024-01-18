import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTransferenciaComponentComponent } from './widget-transferencia-component.component';

describe('WidgetTransferenciaComponentComponent', () => {
  let component: WidgetTransferenciaComponentComponent;
  let fixture: ComponentFixture<WidgetTransferenciaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetTransferenciaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetTransferenciaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
