import { Component, OnInit } from '@angular/core';
import { Recpie } from '../shared/recpie.model';

@Component({
  selector: 'app-recpies',
  templateUrl: './recpies.component.html',
  styleUrls: ['./recpies.component.css']
})
export class RecpiesComponent implements OnInit {
recipe:Recpie;
  constructor() { }

  ngOnInit() {
  }

  onRecpieSelected(event){
    this.recipe=event;
  }

}
