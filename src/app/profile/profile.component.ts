import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(private profileService: ProfileService) {}

  userProfile: object;

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
  }

  editProfile() {
    this.profileService.editProfile();
  }
}
