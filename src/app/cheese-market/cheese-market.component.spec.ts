import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseMarketComponent } from './cheese-market.component';

describe('CheeseMarketComponent', () => {
  let component: CheeseMarketComponent;
  let fixture: ComponentFixture<CheeseMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheeseMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
