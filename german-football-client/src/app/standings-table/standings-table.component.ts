import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.css']
})
export class StandingsTableComponent implements OnInit {
  public standings: [] = [];
  public seasons = [];

  public length: number;
  public displayedColumns: string[] = ['Rank', 'Name', 'Wins', 'Losses',
  'Draws', 'GoalsFor', 'GoalsAgainst', 'GoalsDifference', 'Points'];

  constructor(private footballService: FootballService) {
  }

  ngOnInit() {
    this.getAllSeasons();
  }

  // Get team standings from user input season
  // or by default, the latest season.
  getStandings(season: string): void {

    this.footballService.getStandingsTable('?Season=' + String(season))
    .subscribe(res => {

      // console.log(Object(res).data);
      this.standings = Object(res).data;
      this.length = Object(res).count;
      // this.standings = [];
    });
  }

  // Get all seasons available in database.
  getAllSeasons(): void {
    this.footballService.getSeasons()
      .subscribe(res => {
        this.seasons = [ ...Object(res).data ];
        // console.log(this.seasons);

        // By default, latest season is set to get team standings
        this.getStandings(this.seasons[2]);
      });
      // console.log(this.seasons);
  }
}
