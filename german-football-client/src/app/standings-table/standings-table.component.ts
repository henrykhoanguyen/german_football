import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.css']
})
export class StandingsTableComponent implements OnInit {

  constructor(private footballService: FootballService) {
    this.footballService.getStandingsTable().subscribe(values => console.log(values));
  }

  ngOnInit() {
  }

}
