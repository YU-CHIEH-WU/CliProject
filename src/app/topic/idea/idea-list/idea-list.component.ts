import { Component, OnInit } from '@angular/core';
import { IdeaService, Idea } from '../service/idea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent implements OnInit {
  ideaList: Idea[];
  constructor(private _router: Router, private _ideaService: IdeaService) { }
  async ngOnInit() {
    console.log('list init');
    this.ideaList = await this._ideaService.getIdeaList();
  }
  trackIdeaList(index: number) {
    return index;
  }
  toAdd() {
    this._router.navigateByUrl('/topic/idea/add');
  }
  doEdit() {
    console.log('edit');
  }
  doDelete(index: number): void {
    this._ideaService.deleteIdea(index);
  }
}
