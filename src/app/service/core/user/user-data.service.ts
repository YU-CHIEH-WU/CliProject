import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {

  constructor() { }
  // need to change to Token
  currentUser: User = {
    userAccount: '',
    userName: '',
    photoUrl: '',
    isAdmin: false
  };
  userList = [
    {
      'userAccount': 'test',
      'userPassword': '0000',
      'userName': '測試者',
      'photoUrl': 'https://i.imgur.com/1ecu3ep.png',
      'isAdmin': false
    }, {
      'userAccount': 'admin',
      'userPassword': '000000',
      'userName': '管理者',
      'photoUrl': 'https://i.imgur.com/NSa8FPo.jpg',
      'isAdmin': true
    }, {
      'userAccount': 'jake.wu',
      'userPassword': '0000',
      'userName': '吳彧傑',
      'photoUrl': 'https://i.imgur.com/XZLglBB.jpg',
      'isAdmin': false
    }
  ];

  setCurrentUser(loginUser: User) {
    this.currentUser.userAccount = loginUser.userAccount;
    this.currentUser.userName = loginUser.userName;
    this.currentUser.photoUrl = loginUser.photoUrl;
    this.currentUser.isAdmin = loginUser.isAdmin;
  }
  clearCurrentUser() {
    this.currentUser = new User();
  }
}
export class User {
  userAccount: string;
  userName: string;
  photoUrl: string;
  isAdmin: boolean;
}

