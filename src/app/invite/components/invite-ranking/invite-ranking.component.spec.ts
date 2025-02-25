import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteRankingComponent } from './invite-ranking.component';

describe('InviteRankingComponent', () => {
  let component: InviteRankingComponent;
  let fixture: ComponentFixture<InviteRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteRankingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
