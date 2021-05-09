import { Component, OnInit } from '@angular/core';
import {AccountsService} from 'src/app/services/accounts.service'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public accounts: any
  public selected: any
  public selectedAccount: any
  constructor(private AccountsService: AccountsService ) { 
this.selectedAccount = []
  }

  ngOnInit(): void {
    this.getAllAccountsDB()
  }

  updateAccountOwner(){
   this.selected = this.selected
   this.selectedAccount = []
   this.selectedAccount = this.accounts.filter( (sel: any) => sel.account_number === this.selected.account_number)
    /* this.selectedAccount.push(this.selected) */
    console.log(this.selectedAccount);
  }

 
  async getAllAccountsDB(){
    this.accounts = await this.AccountsService.getAllAccounts()
    this.selectedAccount = this.accounts
    console.log(this.accounts)
    console.log("im here");
    console.log(this.selectedAccount);
   
  }
 

}
