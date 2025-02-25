import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRootComponent } from './input-root.component';

describe('InputRootComponent', () => {
  let component: InputRootComponent;
  let fixture: ComponentFixture<InputRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
