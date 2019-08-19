import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  userProfile: object = {
    name: "Colin Bennett",
    contactInfo: "colintb@outlook.com",
    bio: "I am a Front-End student at Grand Circus"
  };

  constructor(private router: Router) {}

  getUserProfile() {
    return this.userProfile;
  }

  setUserProfile() {
    this.profile = newInfo;
    this.router.navigate(["profile"]);
  }

  editProfile() {
    this.router.navigate(["edit"]);
  }
}
