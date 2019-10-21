import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReplyMessageComponent } from './modal-reply-message.component';

describe('ModalReplyMessageComponent', () => {
  let component: ModalReplyMessageComponent;
  let fixture: ComponentFixture<ModalReplyMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReplyMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReplyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
