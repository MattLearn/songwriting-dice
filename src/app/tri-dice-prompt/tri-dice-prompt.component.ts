import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tri-dice-prompt',
  standalone: true,
  imports: [],
  templateUrl: './tri-dice-prompt.component.html',
  styleUrl: './tri-dice-prompt.component.css'
})
export class TriDicePromptComponent {
  @Input() title = '';
  dicenum = 3;
  maxroll =20;
  promptFeel = ["Relaxed","Tense","Urgent","Happy","Sad","Confused","Stressed","Content","Conflicted","High","Rage","Trippy/Psychedlic","Floaty","Muted/Subdued"];
  promptSpeed = ["Slow","Fast","Mixed","Gradually Increase","Gradually Decrease","Hills(Up then Down)","Valleys(Down then Up)"];
  promptTechFocus = ["Arpeggios", "Modals", "Spanish guitar strumming", "Bossa Nova", "Jazz","Rock","Tapping","Harmonics","Folk","Composition","Ambient","Blues","Slide"];
  diceroll = [0,0,0];

  rolldice(){
      this.diceroll[0] = Math.floor(Math.random()*(this.promptFeel.length-1)+1);
      this.diceroll[1] = Math.floor(Math.random()*(this.promptSpeed.length-1)+1);
      this.diceroll[2] = Math.floor(Math.random()*(this.promptTechFocus.length-1)+1);
  }
}
