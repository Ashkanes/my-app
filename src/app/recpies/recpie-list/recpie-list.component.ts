import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recpie } from 'src/app/shared/recpie.model';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {
@Output() recipeSelected:EventEmitter<Recpie> = new EventEmitter<Recpie>();

  recpies: Recpie[] = [
    new Recpie('ماکارانی','یک توضیح درباره ماکارانی','https://manoelite.com/images/img/32-2016-03-1479815776.jpg'),
    new Recpie('ماکارانی','یک توضیح درباره ماکارانی','https://manoelite.com/images/img/32-2016-03-1479815776.jpg'),
    new Recpie('ماکارانی','یک توضیح درباره ماکارانی','https://manoelite.com/images/img/32-2016-03-1479815776.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onEntekhabRecipe(event){
    this.recipeSelected.emit(event);
  }

}
