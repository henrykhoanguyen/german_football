import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-seasons-button',
  templateUrl: './seasons-button.component.html',
  styleUrls: ['./seasons-button.component.css']
})
export class SeasonsButtonComponent implements OnInit {
  @Output() inputSeason = new EventEmitter<string>();
  @Input() seasons: [];
  displayingSeason: string;

  constructor() { }

  ngOnInit() {
  }

  // set season's team standings according to user input
  setSeason(season) {
    this.displayingSeason = season;
    this.inputSeason.emit(season);
  }
}
