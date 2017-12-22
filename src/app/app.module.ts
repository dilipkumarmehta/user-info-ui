import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import { UserComponent } from './user.component';
import { UserListComponent } from './user-list.component'
import { UserEditComponent } from './user-edit.component'

import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ 
    AppComponent,
    UserComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
