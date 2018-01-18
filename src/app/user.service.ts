import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  private itemList = new BehaviorSubject<any>([]);
  item = this.itemList.asObservable();
  constructor() { }
  changeItem(item) {
    this.itemList.next(item);
  }
}
