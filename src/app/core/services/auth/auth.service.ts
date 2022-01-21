import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth
  ) { }

  createUser(email: string, password: string): Promise<UserCredential> {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string): Promise<UserCredential> {
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  logout(): any {
    this.afa.signOut();
  }

  hasUser(): Observable<any> {
    return this.afa.authState;
  }
}
