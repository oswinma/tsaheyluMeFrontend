import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupcircleComponent } from './groupcircle.component';

describe('GroupcircleComponent', () => {
  let component: GroupcircleComponent;
  let fixture: ComponentFixture<GroupcircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupcircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupcircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
