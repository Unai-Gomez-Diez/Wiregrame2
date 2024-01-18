import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEspacioComponentComponent } from './widget-espacio-component.component';

describe('WidgetEspacioComponentComponent', () => {
  let component: WidgetEspacioComponentComponent;
  let fixture: ComponentFixture<WidgetEspacioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetEspacioComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetEspacioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
