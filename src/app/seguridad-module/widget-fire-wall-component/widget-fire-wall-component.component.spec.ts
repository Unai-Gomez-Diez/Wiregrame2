import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFireWallComponentComponent } from './widget-fire-wall-component.component';

describe('WidgetFireWallComponentComponent', () => {
  let component: WidgetFireWallComponentComponent;
  let fixture: ComponentFixture<WidgetFireWallComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetFireWallComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFireWallComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
