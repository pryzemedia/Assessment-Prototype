import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsePanelsComponent } from './collapse-panels.component';

describe('CollapsePanelsComponent', () => {
  let component: CollapsePanelsComponent;
  let fixture: ComponentFixture<CollapsePanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CollapsePanelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapsePanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
