import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.css']
})
export class StandingsTableComponent implements OnInit {
  private standings: [] = [];
  private length: number;
  private displayedColumns: string[] = ["Name", "Wins", "Losses",
  "Draws", "GoalsFor", "GoalsAgainst", "GoalsDifference", "Points"];

  constructor(private footballService: FootballService) {
  }

  ngOnInit() {
    this.getStandings();
  }

  getStandings():void{

    this.footballService.getStandingsTable("")
    .subscribe(res => {

      console.log(Object(res).data);
      this.standings = Object(res).data;
      this.length = Object(res).count;
      // this.standings = [];
    });
  }
}
