import { Component, OnInit } from '@angular/core';
import {AccountsService} from 'src/app/services/accounts.service'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public accounts: any
  public selected: number | null
  
  constructor(private AccountsService: AccountsService ) { 
    this.selected = null
  }

  ngOnInit(): void {
    this.getAllAccountsDB()
  }

  async updateAccountOwner(){
  this.selected = this.selected
    console.log( this.selected) 
 /*  return  this.accounts = await this.AccountsService.getAccountByChange(this.selected) */
  
  
  }

   async showCurrentAccount(){
/*    this.accounts =  await this.AccountsService.getAccountByChange(this.selected) */
  }
  async getAllAccountsDB(){
    this.accounts = await this.AccountsService.getAllAccounts()
    console.log(this.accounts)
  }
 

}
