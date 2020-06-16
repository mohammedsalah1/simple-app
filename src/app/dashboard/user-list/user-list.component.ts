import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'
import {User} from '../user.model'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  /* list of users */
  users: User[];
  /* current page number */
  p: number = 1;
  /*how many items per page*/
  pageSize:number = 6;
  /*total items in users database*/
  totalItems: number;
  
  reqOptions= {
    page: this.p
  }

  constructor(private userService: UserService) { 
    this.users = [];

          console.log(this.users);

  }

  ngOnInit(): void {
   this.getUserList();
  }

  changePage(event: number){
    console.log('event: ',event);
    this.reqOptions.page = event;
    this.getUserList();
  }

  getUserList(){
    this.userService.list(this.reqOptions).subscribe((res: any) => {
      this.users = res.data;
      this.totalItems=  res.total;
      console.log(this.users);
    }); 
  }

}
