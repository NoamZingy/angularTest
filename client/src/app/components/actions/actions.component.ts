import { Component, OnInit } from '@angular/core';
import {AccountsService} from 'src/app/services/accounts.service'
import {MatSnackBar} from '@angular/material/snack-bar'
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})

export class ActionsComponent implements OnInit {
 public account_number: number | null;
 public type: String | null ;
 public amount: number| null

  constructor(
  private AccountsService: AccountsService,
  public MatSnackBar: MatSnackBar
  ) { 
    this.account_number = null
    this.type = null
    this.amount = null
  }

  ngOnInit(): void {

  }
  async addNewTask(account_number : Number| null , type:String | null, amount:Number | null, ){
    const result = await this.AccountsService.addTask(account_number , type, amount)
    this.MatSnackBar.open('Action made successfully', 'Undo', {
      duration: 3000
    });
    console.log(result)
  }


  



}
