import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private matSnackbar : MatSnackBar) { }

  openSnackbar(msg : string){
    this.matSnackbar.open(msg, "Close", {
      horizontalPosition : 'left',
      verticalPosition : 'top',
      duration : 3000
    })
  }
}
