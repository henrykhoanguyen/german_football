import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatTableModule,
  MatMenuModule,
  MatButtonModule
} from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StandingsTableComponent } from './standings-table/standings-table.component';
import { MatchesTableComponent } from './matches-table/matches-table.component';
import { SeasonsButtonComponent } from './seasons-button/seasons-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    StandingsTableComponent,
    MatchesTableComponent,
    SeasonsButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    HttpClientModule,
    FontAwesomeModule,
    MatMenuModule,
    MatButtonModule
    // SeasonsButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
