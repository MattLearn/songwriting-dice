import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiceCategoryComponent } from './dice-category/dice-category.component';
import { TriDicePromptComponent } from './tri-dice-prompt/tri-dice-prompt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DiceCategoryComponent,TriDicePromptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SONGWRITING DICE';
  key=['Ab','A','Bb','B','C','Db','D','Eb','E','Fb','F','Gb','G'];
  progression = ["I - V - VI - IV", "I - IV - V", "I - VI - IV - V", "VI - IV - I - V", "I - IV - VI - V","II - V - I", "I - IV - V - IV", "I - IV - II - V","I - IV - I - V", "I - II - III - IV - V",
                 "I - III - VI - IV", "I - V  - I - IV", "IV - V - I","VI - V - IV - V", "IV - I - V","IV - V - IV - IV - V - I", "IV - VI - I", "V - I - IV", "I - II - V", "VI - V - IV - III"];
  promptFeel = ["Relaxed","Tense","Urgent","Happy","Sad","Confused","Stressed","Content","Conflicted","High","Rage","Trippy/Psychedlic","Floaty","Muted/Subdued"];
  promptSpeed = ["Slow","Fast","Mixed","Gradually Increase","Gradually Decrease","Hills(Up then Down)","Valleys(Down then Up)"];
  promptTechFocus = ["Arpeggios", "Modals", "Spanish guitar strumming", "Bossa Nova", "Jazz","Rock","Tapping","Harmonics","Folk"]
}
