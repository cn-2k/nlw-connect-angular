import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteLinkInputComponent } from './invite-link-input.component';

describe('InviteLinkInputComponent', () => {
  let component: InviteLinkInputComponent;
  let fixture: ComponentFixture<InviteLinkInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteLinkInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteLinkInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
