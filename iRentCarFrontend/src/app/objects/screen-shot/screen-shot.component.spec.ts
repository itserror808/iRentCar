import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenShotComponent } from './screen-shot.component';

describe('ScreenShotComponent', () => {
  let component: ScreenShotComponent;
  let fixture: ComponentFixture<ScreenShotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenShotComponent]
    });
    fixture = TestBed.createComponent(ScreenShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
