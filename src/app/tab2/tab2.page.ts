import {Component, OnInit} from '@angular/core';
import {UserServices} from "../services/user.service";
import {User} from "../models/user";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  users: User[];

  constructor(
      private userService: UserServices
  ) {}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      console.log(res);
      this.users = res;
    })
  }
}
