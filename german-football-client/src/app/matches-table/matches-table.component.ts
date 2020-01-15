import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, PageEvent } from '@angular/material';
// Services
import { FootballService } from '../services/football.service';
// Components
import { SeasonsButtonComponent } from '../seasons-button/seasons-button.component';
import { MatchDetailsDialogComponent } from '../match-details-dialog/match-details-dialog.component';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  private inputSeason: string;
  private matches: [] = [];
  private length: number;

  private pagedMatches = []; // only has 9 matches to be displayed on each page
  private pageIndex = 0; // pageIndex by default is 0
  private pageSize = 9;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  private seasons = [];

  constructor(
    private footballService: FootballService,
    public dialog: MatDialog
  ) {}
  // , private seasonsButton: SeasonsButtonComponent
  ngOnInit() {
    this.getAllSeasons();
  }

  // Get all matches in a given season
  getMatches(season): void {
    this.footballService
      .getMatchesTable('?Season=' + String(season))
      .subscribe(res => {
        // console.log(res);
        this.matches = Object(res).data; // get matches
        this.length = Object(res).count; // get number of matches
        // set pageIndex to current pageIndex that user is on
        this.OnPageChange({
          pageIndex: this.pageIndex,
          pageSize: this.pageSize,
          length: this.length
        });
        // console.log(this.pagedMatches);
      });

  }

  // Get all seasons
  getAllSeasons(): void {
    this.footballService.getSeasons().subscribe(res => {
      this.seasons = [...Object(res).data];
      // console.log(this.seasons);
      this.setSeason(this.seasons[2]);
    });
    // console.log(this.seasons);
  }

  // Set season for season selection button
  setSeason(season): void {
    this.inputSeason = season;
    // console.log(season);
    this.getMatches(season);
  }

  // Open a match dialog/modal
  // that has match's info in it.
  openDialog(match) {
    console.log(match);
    this.dialog.open(MatchDetailsDialogComponent, { data: match });
  }

  // Pagination
  OnPageChange(event: PageEvent) {
    // console.log(event);
    // set pageIndex to current pageIndex that user is on
    this.pageIndex = event.pageIndex;
    // console.log(this.pageIndex);

    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if (endIndex > this.length) {
      endIndex = this.length;
    }
    // console.log(startIndex, endIndex);

    this.pagedMatches = this.matches.slice(startIndex, endIndex);
    // console.log(this.pagedMatches);
  }
}
