import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';
import { RepolistComponent } from './repolist/repolist.component';
import { FormsModule } from '@angular/forms';
import { SearchRepoPipe } from './search-repo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileSummaryComponent,
    RepolistComponent,
    SearchRepoPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
