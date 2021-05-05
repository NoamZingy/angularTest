import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http:HttpClient) { }

  getAllAccounts(){
    return this.http.get('http://localhost:5000/accounts').toPromise()
  }

/*   getAccountByChange(account_number:any){
    return this.http.get('http://localhost:5000/accounts', (account_number)).toPromise()

  } */



  addTask(account_number : any , type:any, amount:any){
    return this.http.post('http://localhost:5000/addTask' , {account_number , type, amount,}).toPromise()
  } 

}
