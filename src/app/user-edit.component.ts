import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { UserListComponent } from './user-list.component';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html'
})

export class UserEditComponent implements OnInit {
  
  
  ngOnInit(): void {
    console.log(this.editId);
    if(this.editId !== null) {
      this.userService.getUserById(this.editId).then(user => this.editingUser = user);
      //console.log(this.userService.getUserById(this.editId).then(user => this.editingUser = user));
    }
  }


  users: User[];
  newUser: User = new User();
  editing: boolean = false;
  editingUser: User = new User();
  editId: string = this.userService.getId();

   constructor(
    private userService: UserService,
    private router: Router
  ) {}
  
  updateUser(userData: User): void {
    console.log(userData);
    this.userService.updateUser(userData)
    .then(updatedUser => {
      this.newUser = updatedUser;
      this.router.navigate(['/users']) 
    });
  }
}
  