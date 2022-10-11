import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavurlListComponent } from './favurl-list.component';

describe('FavurlListComponent', () => {
  let component: FavurlListComponent;
  let fixture: ComponentFixture<FavurlListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavurlListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavurlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
