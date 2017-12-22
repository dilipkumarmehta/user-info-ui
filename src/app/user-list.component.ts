import { Component, Input, OnInit, Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})
@Injectable()
export class UserListComponent implements OnInit {
  users: User[];
  newUser: User = new User();
  editing: boolean = false;
  editingUser: User = new User();
  id: string;


  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .then(users => this.users = users );    
  }
  
  deleteUser(id: string): void {
    this.userService.deleteUser(id)
      .then(() => {
        this.users = this.users.filter(user => user.id != id);
      });
  }
  
  editUser(userData: User): void {
    this.editing = true;
    console.log(this.editing);
    Object.assign(this.editingUser, userData);
    console.log(this.editingUser);
    this.id = this.editingUser.id;
    //console.log(this.id);
    this.userService.setId(this.id);
    console.log(this.userService.getId());
  }

}