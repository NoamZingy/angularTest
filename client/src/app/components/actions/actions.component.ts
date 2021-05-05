import { Component, OnInit } from '@angular/core';
import {AccountsService} from 'src/app/services/accounts.service'
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
  private AccountsService: AccountsService
  ) { 
    this.account_number = null
    this.type = null
    this.amount = null
  }

  ngOnInit(): void {


  }
  async addNewTask(account_number : Number| null , type:String | null, amount:Number | null,){
    const result = await this.AccountsService.addTask(account_number , type, amount)
    console.log(result)
  }


  



}
