import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
  users: User[];
  newUser: User = new User();

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.getUsers();
  }

//  getUsers(): void {
//    this.userService.getUsers()
//      .then(users => this.users = users );    
//  }

  createUser(userForm: NgForm): void {
    this.userService.createUser(this.newUser)
      .then(createUser => {        
        userForm.reset();
        this.newUser = new User();
        this.router.navigate(['/users'])
      });
  }

}