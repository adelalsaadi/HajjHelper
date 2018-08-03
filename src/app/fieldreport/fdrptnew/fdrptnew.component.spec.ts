import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdrptNewComponent } from './fdrptnew.component';

describe('ProviderComponent', () => {
  let component: FdrptNewComponent;
  let fixture: ComponentFixture<FdrptNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdrptNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdrptNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
