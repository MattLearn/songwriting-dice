import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dice-category',
  standalone: true,
  imports: [],
  templateUrl: './dice-category.component.html',
  styleUrl: './dice-category.component.css'
})
export class DiceCategoryComponent {
  @Input() title = '';
  @Input() maxroll=0;
  @Input() criteria:any [];
  diceroll = 0;
  
  constructor(){
    this.criteria = [this.maxroll];
  }

  rolldice(){
    this.diceroll = Math.floor(Math.random()*(this.maxroll-1)+1);
  }
  
}
