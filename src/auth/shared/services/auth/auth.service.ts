import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { Store } from 'src/store';
// import * as admin from 'firebase-admin';

export interface Roles {
  customer?: boolean;
  admin?: boolean;
}

export interface User {
  email: string;
  uid: string;
  authenticated: boolean;
  roles?: Roles;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private store: Store) {}

  createUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  loginUser(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
  isAdmin() {
    return this.auth.currentUser.getIdTokenResult().then((idTokenResult) => {
      if (idTokenResult.claims['roles'] === 'admin') {
        return true;
      } else {
        return false;
      }
    });
  }

  getAdminPrivilege(uid: string, role: string) {
    // Set custom claim for a user with a specific role
    // admin.auth().setCustomUserClaims(uid, { role: role });
  }

  // private checkAuthorization(user: User, allowedRoles: string[]): boolean {
  //   if (!user) return false;
  //   for (const role of allowedRoles) {
  //     if (user.roles[role]) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // canRead(user: User) {
  //   const allowed = ['admin,customer'];
  //   return this.checkAuthorization(user, allowed);
  // }
  // canEdit(user: User) {
  //   const allowed = ['admin'];
  //   return this.checkAuthorization(user, allowed);
  // }

  // canDelete(user: User) {
  //   const allowed = ['admin'];
  //   return this.checkAuthorization(user, allowed);
  // }
}
