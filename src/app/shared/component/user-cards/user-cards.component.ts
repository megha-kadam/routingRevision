import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { SnackbarService } from '../../service/snackbar.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Iuser } from '../../model/user.interface';
import { MatDialog, MatDialogClose, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss']
})
export class UserCardsComponent implements OnInit {
  userObj !: Iuser;
  userId !: string;

  constructor(private userService : UserService,
              private snackbar : SnackbarService,
              private router : Router,
              private route : ActivatedRoute,
              private matdialog : MatDialog
  ) { }

  getUserDetail(){
    this.route.params
    .subscribe((param : Params) => {
      console.log(param);   
      this.userId = param['id'];
      
      if(this.userId){
        this.userService.fetchUser(this.userId)
        .subscribe({
          next : data => {
            console.log(data);
            this.userObj = data;
          },
          error : err => this.snackbar.openSnackbar(err)
        })
      }
    })

    // this.userId = this.route.snapshot.params['id'];
    // console.log(this.userId);
    //  if(this.userId){
    //   this.userService.fetchUser(this.userId)
    //   .subscribe({
    //     next : data => {
    //       console.log(data);
    //       this.userObj = data;
    //       console.log(this.userObj);  
    //     },
    //     error : err => this.snackbar.openSnackbar(err)
    //   })
    // }

  }

  ngOnInit(): void {
    this.getUserDetail()
  }

  onRemove(user : Iuser){
    let matConfig : MatDialogConfig = new MatDialogConfig();
    matConfig.data = `Are you sure, you want to remove ${user.name} user`;
    matConfig.width = '500px';

    let matdialogRef = this.matdialog.open(GetConfirmComponent, matConfig);
    matdialogRef.afterClosed()
    .subscribe(res => {
      if(res){
        this.userService.removeUser(user.id)
        this.snackbar.openSnackbar(`User ${user.name} removed successfully`)
      }
    })
  }

}
