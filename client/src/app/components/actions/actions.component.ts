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
 public amount: number
 public interest: number| null
 public payment: number| null
  public accounts: any 
  public types: any
  isLoan = false
  constructor(
  private AccountsService: AccountsService,
  public MatSnackBar: MatSnackBar
  ) { 
    this.account_number = null
    this.type = null
    this.amount = 0
    this.interest = null
    this.payment = null
    this.types = ["pull", "deopsit", "loan"]
  }

  ngOnInit(): void {
    this.getAllAccountsDB()
  }
  async addNewTask(account_number : Number| null , type:String | null, amount:Number , interest: Number | null, payment: Number | null){
    if (amount < 0) return
    const result = await this.AccountsService.addTask(account_number , type, amount, interest, payment)
    this.MatSnackBar.open(`${type} made successfully`, 'Undo', {
      duration: 3000
    });
    console.log(result)
  }

  async getAllAccountsDB(){
    this.accounts = await this.AccountsService.getAllAccounts()
    console.log(this.accounts)
   
   
  }
 
  setLoanState(){
if (this.type === 'loan'){
  this.isLoan = true
  console.log(this.isLoan)
}
else this.isLoan = false
  }
  



}
