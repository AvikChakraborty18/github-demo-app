import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from './services/profile-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vedantu-github-app';
  userData;
  constructor(private profileData : ProfileDataService){}

  ngOnInit(){
    this.profileData.getprofiledata().subscribe(data => {
      this.userData = data;
    })
  }
  
}
