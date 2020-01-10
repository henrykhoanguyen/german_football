import { Component, OnInit } from '@angular/core';
// Services
import { FootballService } from '../services/football.service';
// Components
import { SeasonsButtonComponent } from '../seasons-button/seasons-button.component';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  private inputSeason: string;
  private matches: [] = [];
  private length: number;

  private seasons = [];

  constructor(private footballService: FootballService) {}
  // , private seasonsButton: SeasonsButtonComponent
  ngOnInit() {
    this.getAllSeasons();
    // this.seasons = this.seasonsButton.getSeasons();
    // this.inputSeason = this.seasonsButton.getSeason();
  }

  getMatches(season): void {
    this.footballService
      .getMatchesTable('?Season=' + String(season))
      .subscribe(res => {
        // console.log(res);
        this.matches = Object(res).data;
        this.length = Object(res).count;
      });
  }

  getAllSeasons(): void {
    this.footballService.getSeasons().subscribe(res => {
      this.seasons = [...Object(res).data];
      // console.log(this.seasons);
      this.setSeason(this.seasons[2]);
    });
    // console.log(this.seasons);
  }

  setSeason(season): void {
    this.inputSeason = season;
    // console.log(season);
    this.getMatches(season);
  }
}
