import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNumComponent } from './message-num.component';

describe('MessageNumComponent', () => {
  let component: MessageNumComponent;
  let fixture: ComponentFixture<MessageNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageNumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
