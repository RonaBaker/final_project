import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRemoveMessageComponent } from './modal-remove-message.component';

describe('ModalRemoveMessageComponent', () => {
  let component: ModalRemoveMessageComponent;
  let fixture: ComponentFixture<ModalRemoveMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRemoveMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRemoveMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
