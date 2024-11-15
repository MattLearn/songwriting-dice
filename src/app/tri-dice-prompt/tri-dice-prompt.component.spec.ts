import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriDicePromptComponent } from './tri-dice-prompt.component';

describe('TriDicePromptComponent', () => {
  let component: TriDicePromptComponent;
  let fixture: ComponentFixture<TriDicePromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriDicePromptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriDicePromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
