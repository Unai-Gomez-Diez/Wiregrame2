import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFTPComponentComponent } from './widget-ftpcomponent.component';

describe('WidgetFTPComponentComponent', () => {
  let component: WidgetFTPComponentComponent;
  let fixture: ComponentFixture<WidgetFTPComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetFTPComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFTPComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
