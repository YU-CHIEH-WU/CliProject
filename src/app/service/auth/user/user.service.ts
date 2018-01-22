import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  constructor(private router: Router) { }
  // need to change to Token
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
      'photoUrl': 'https://i.imgur.com/BHOQI1M.jpg',
      'isAdmin': true
    }, {
      'userAccount': 'jake.wu',
      'userPassword': '0000',
      'userName': '吳彧傑',
      'photoUrl': 'https://i.imgur.com/XZLglBB.jpg',
      'isAdmin': false
    }
  ];
  User: {
    userAccount: string,
    userName: string,
    photoUrl: string,
    isAdmin: boolean
  };

  getUserList() {
    return this.userList;
  }
}
