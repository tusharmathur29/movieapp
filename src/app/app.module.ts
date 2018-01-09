import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MoviecardComponent } from './components/moviecard/moviecard.component';
import { DataService } from './services/data.service';
import { RecommendationService } from './services/recommendation.service';
import { MoviesectionComponent } from './components/moviesection/moviesection.component';
import { SearchsectionComponent } from './components/searchsection/searchsection.component';
import { PaginationComponent } from './components/pagination/pagination.component';

export const myComponents = [
  AppComponent
];

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'my-recommendations', component: RecommendationsComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ...myComponents,
    RecommendationsComponent,
    DashboardComponent,
    MoviecardComponent,
    MoviesectionComponent,
    SearchsectionComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService, RecommendationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
