import { Component, OnInit } from '@angular/core';
import { FootballService } from '../services/football.service';

@Component({
  selector: 'app-seasons-button',
  templateUrl: './seasons-button.component.html',
  styleUrls: ['./seasons-button.component.css']
})
export class SeasonsButtonComponent implements OnInit {
  private inputSeason: string;
  private seasons = [];

  constructor(private footballService: FootballService) { }

  ngOnInit() {
    // this.getAllSeasons();
  }

  getSeason(): string {
    return this.inputSeason;
  }

  setSeason(season: string): void {
    this.inputSeason = season;
  }

  getSeasons() {
    return this.seasons;
  }

  // getAllSeasons(): void {
  //   this.footballService.getSeasons()
  //     .subscribe(res => {
  //       const tempArr = [ ...Object(res).data ];
  //       tempArr.forEach(element => {
  //         this.seasons.push(element);
  //       });
  //       console.log(this.seasons);
  //       this.setSeason(this.seasons[2]);
  //     });
  //     // console.log(this.seasons);
  // }
}
