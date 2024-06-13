import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavButtonsComponent } from './sidenav-buttons.component';

describe('SidenavButtonsComponent', () => {
  let component: SidenavButtonsComponent;
  let fixture: ComponentFixture<SidenavButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
