import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IdeaService {
  private ideaList: Idea[];
  constructor(private _http: HttpClient) { }
  private apiurl = 'https://api.github.com/users/mralexgray/repos';
  async getIdeaList() {
    if (!this.ideaList) {
      this.ideaList = await this._http.get<Idea[]>(this.apiurl).toPromise();
    }
    return this.ideaList;
  }
  addToIdeaList(newIdea: Idea) {
    this.ideaList.unshift({ id: newIdea.id, name: newIdea.name, full_name: newIdea.full_name, created_at: newIdea.created_at });
  }
  deleteIdea(index: number) {
    this.ideaList.splice(index, 1);
  }
}
export class Idea {
  id: number;
  name: string;
  full_name: string;
  created_at: Date;
}
