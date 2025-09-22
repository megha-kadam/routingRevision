import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../service/snackbar.service';
import { UserService } from '../../service/user.service';
import { Iuser } from '../../model/user.interface';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  users : Array<Iuser> = [];

  constructor(
          private userService : UserService,
          private snackbar : SnackbarService,
          private router : Router,
          private route : ActivatedRoute
  ) { }

  getAllUser(){
    this.userService.fetchAllUser()
    .subscribe({
      next : data => {
        this.users = data
      },
      error : err => this.snackbar.openSnackbar(err)
    })
  }

  ngOnInit(): void {
    this.getAllUser();
  }

}
