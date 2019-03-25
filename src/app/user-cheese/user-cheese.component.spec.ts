import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCheeseComponent } from './user-cheese.component';

describe('UserCheeseComponent', () => {
  let component: UserCheeseComponent;
  let fixture: ComponentFixture<UserCheeseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCheeseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCheeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
