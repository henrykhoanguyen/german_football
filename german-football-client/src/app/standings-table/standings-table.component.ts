import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.css']
})
export class StandingsTableComponent implements OnInit {
  private standings: [] = [];
  private seasons = [];
  private inputSeason = '';
  private length: number;
  private displayedColumns: string[] = ['Rank', 'Name', 'Wins', 'Losses',
  'Draws', 'GoalsFor', 'GoalsAgainst', 'GoalsDifference', 'Points'];

  constructor(private footballService: FootballService) {
  }

  ngOnInit() {
    this.getAllSeasons();
  }

  getStandings(season):void{

    this.footballService.getStandingsTable('?Season=' + String(season))
    .subscribe(res => {

      // console.log(Object(res).data);
      this.standings = Object(res).data;
      this.length = Object(res).count;
      // this.standings = [];
    });
  }

  getAllSeasons(): void{
    this.footballService.getSeasons()
      .subscribe(res => {
        // Object(res).data.forEach(element => {
        //   this.seasons.push(element);
        // })
        this.seasons = [ ...Object(res).data ];
        // console.log(this.seasons);
        this.setSeason(this.seasons[2]);
      });
      // console.log(this.seasons);
  }

  setSeason(season){
    this.inputSeason = season;
    // console.log(season);
    this.getStandings(season);
  }
}
