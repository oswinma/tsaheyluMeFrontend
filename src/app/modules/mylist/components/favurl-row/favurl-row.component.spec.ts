import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavurlRowComponent } from './favurl-row.component';

describe('FavurlRowComponent', () => {
  let component: FavurlRowComponent;
  let fixture: ComponentFixture<FavurlRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavurlRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavurlRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
