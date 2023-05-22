import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopePanelComponent } from './scope-panel.component';

describe('ScopePanelComponent', () => {
  let component: ScopePanelComponent;
  let fixture: ComponentFixture<ScopePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ScopePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
