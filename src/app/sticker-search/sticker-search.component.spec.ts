import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerSearchComponent } from './sticker-search.component';

describe('StickerSearchComponent', () => {
  let component: StickerSearchComponent;
  let fixture: ComponentFixture<StickerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
