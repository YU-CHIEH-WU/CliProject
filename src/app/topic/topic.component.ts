import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
  animations: [

    trigger('itemList', [
      transition('* => *', [
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ]))
        ]), { optional: true }),
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 })
          ]))
        ]), { optional: true })
      ])])

  ]
})
export class TopicComponent implements OnInit {
  apiUrl: string = String('https://api.github.com/users/mralexgray/repos');
  item: { id: number, name: string, full_name: string, created_at: Date };
  itemList: any;
  isList: Boolean;
  isAdd: Boolean;
  isEdit: Boolean;
  constructor(private http: Http, private route: ActivatedRoute, private _data: UserService) { }

  ngOnInit() {
    this.doGetAll();
    this.reset();
  }
  doGet(id: number) {
    console.log(id, this.itemList);
    this.item = this.itemList[id];
  }
  doGetAll() {
    this.http.get(this.apiUrl).subscribe(res => this.itemList = res.json());
  }
  doAdd(): void {
    this.isList = false;
    this.isAdd = true;
    console.log(this.itemList);
  }
  doAddDone(): void {
    const now = new Date();
    this.item.id = now.getTime();
    this.item.created_at = now;
    this.itemList.unshift(this.item);
    this.reset();
  }
  doEdit(target): void {
    // this.item.id = target.id;
    // this.item.name = target.name;
    // this.item.full_name = target.full_name;
    this.isList = false;
    this.isEdit = true;
  }
  doEditDone(): void {
    // for (const i in this.itemList) {
    //   if (this.item.id === this.itemList[i].id) {
    //     this.itemList[i].name = this.item.name;
    //     this.itemList[i].full_name = this.item.full_name;
    //     this.itemList[i].created_at = new Date();
    //   }
    // }
    this.reset();
  }
  doDelete(index: number): void {
    this.itemList.splice(index, 1);
  }
  reset(): void {
    this.item = { id: 0, name: '', full_name: '', created_at: new Date() };
    this.isList = true;
    this.isAdd = false;
    this.isEdit = false;
  }
}
