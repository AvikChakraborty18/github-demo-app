import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from '../services/profile-data.service'
import { from } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.css']
})
export class ProfileSummaryComponent implements OnInit {

  profilePicture: string;
  userName: string;
  userID: string;
  userBio: string;
  company: string;
  location: string;
  userEmail = "supreetSingh247@gmail.com"
  constructor(private profiledata: ProfileDataService) { }

  ngOnInit() {
    this.profiledata.getprofiledata().subscribe(data => {
      this.profilePicture = data.avatar_url;
      this.userName = data.name;
      this.userID = data.login;
      this.company = data.company;
      this.location = data.location;
      this.userBio = data.bio;
      
    })
  }

}

