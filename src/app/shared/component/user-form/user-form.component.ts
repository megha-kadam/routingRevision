import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../service/snackbar.service';
import { UserService } from '../../service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { Iuser } from '../../model/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm !: FormGroup;
  isInEditMode : boolean = false;
  userId !: string;
  userObj !: Iuser;

  constructor(private userService : UserService,
                private snackbar : SnackbarService,
                private router : Router,
                private route : ActivatedRoute,
              private uuidService : UuidService) { }

  createUserForm(){
    this.userForm = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      age : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required]),
      image : new FormControl(null, [Validators.required]),
      userRole : new FormControl(null, [Validators.required]),
    })
  }

  onAddUser(){
    if(this.userForm.valid){
      let userObj = {
        ...this.userForm.value,
        id : this.uuidService.generateUuid()
      }
      console.log(userObj);
      
      this.userService.createUser(userObj);
      this.userForm.reset();
      this.snackbar.openSnackbar(`New user ${userObj.name} added successfully`)
    }
  }

  onEditUser(){
    this.userId = this.route.snapshot.params['id'];
    if(this.userId){
      this.userService.fetchUser(this.userId)
      .subscribe({
        next : data => {
          this.userObj = data;
          this.userForm.patchValue(data);
          this.isInEditMode = true;
        },
        error : err => this.snackbar.openSnackbar(err)
      })
    }
  }

  onUpdate(){
   if(this.userForm.valid){
     let updateObj = {
      ...this.userForm.value,
      id : this.userId
    }
    console.log(updateObj);
    
    this.userService.updateUser(updateObj);
    this.userForm.reset()
    this.snackbar.openSnackbar(`User ${updateObj.name} updated successfully`)
   }
  }

  ngOnInit(): void {
    this.createUserForm();
    this.onEditUser();
  }

}
