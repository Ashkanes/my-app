import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recpie } from 'src/app/shared/recpie.model';

@Component({
  selector: 'app-recpie-item',
  templateUrl: './recpie-item.component.html',
  styleUrls: ['./recpie-item.component.css']
})
export class RecpieItemComponent implements OnInit {
@Input() recipe:Recpie;
@Output() selectedRecipe:EventEmitter<Recpie>=new EventEmitter<Recpie>();
  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(){
    this.selectedRecipe.emit(this.recipe);
  }

}
