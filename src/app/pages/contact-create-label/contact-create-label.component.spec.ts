import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCreateLabelComponent } from './contact-create-label.component';

describe('ContactCreateLabelComponent', () => {
  let component: ContactCreateLabelComponent;
  let fixture: ComponentFixture<ContactCreateLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCreateLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCreateLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
