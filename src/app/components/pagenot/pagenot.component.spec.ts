import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotComponent } from './pagenot.component';

describe('PagenotComponent', () => {
  let component: PagenotComponent;
  let fixture: ComponentFixture<PagenotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
