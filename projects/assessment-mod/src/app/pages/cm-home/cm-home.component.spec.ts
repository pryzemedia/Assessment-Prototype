import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMHomeComponent } from './cm-home.component';

describe('CMHomeComponent', () => {
  let component: CMHomeComponent;
  let fixture: ComponentFixture<CMHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CMHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
