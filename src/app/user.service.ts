import { Injectable } from '@angular/core';
import { User } from './user';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private baseUrl = 'http://localhost:8080';
  private id: string;

  constructor(private http: Http) { }

  getUsers():  Promise<User[]> {
    return this.http.get(this.baseUrl + '/api/users/')
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  createUser(userData: User): Promise<User> {
    return this.http.post(this.baseUrl + '/api/users/', userData)
      .toPromise().then(response => response.json() as User)
      .catch(this.handleError);
  }
  
  deleteUser(id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/api/users/' + id)
      .toPromise()
      .catch(this.handleError);
  }
  
  getUserById(id: string): Promise<User> {
    return this.http.get(this.baseUrl + '/api/users/' + id)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }
  
  updateUser(userData: User): Promise<User> {
    return this.http.put(this.baseUrl + '/api/users/' + userData.id, userData)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }
  
  setId(id: string) {
    this.id = id;
  }
  
  getId(): string {
    return this.id;
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
