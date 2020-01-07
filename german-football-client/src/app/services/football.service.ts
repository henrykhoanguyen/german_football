import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private footballUrl = 'http://localhost:5000/api/v1/';

  constructor(private http: HttpClient) {
    console.log('Football service initialized...');
  }

  getStandingsTable() {
    // console.log(this.http.get(this.footballUrl + 'standings').pipe(tap(_ => console.log('standings table fetched...'))));
    return this.http
      .get(this.footballUrl + 'standings')
      .pipe(
        tap(_ => console.log('standings table fetched...'))
      );
  }
}
