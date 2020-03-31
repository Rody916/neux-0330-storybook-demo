import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDemoComponentComponent } from './profile-demo-component.component';

describe('ProfileDemoComponentComponent', () => {
  let component: ProfileDemoComponentComponent;
  let fixture: ComponentFixture<ProfileDemoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDemoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
