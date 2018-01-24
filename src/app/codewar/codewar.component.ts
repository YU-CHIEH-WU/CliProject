import { Component, OnInit, Input } from '@angular/core';
import { ClickStopPropagationDirective } from '../shared/directive/click-stop-propagation.directive';
import { MaterializeService } from '../shared/service/materialize/materialize.service';
import { KataSolveService } from './service/kata-solve.service';
import { KataDataService } from './service/kata-data.service';
@Component({
  selector: 'app-codewar',
  templateUrl: './codewar.component.html',
  styleUrls: ['./codewar.component.scss']
})
export class CodewarComponent implements OnInit {
  kataList = [];
  constructor(private _materialize: MaterializeService,
    private _kataSolveService: KataSolveService, private _kataDataService: KataDataService
  ) { }
  ngOnInit() {
    this.kataList = this._kataDataService.getKataList();
    this._materialize.collapsible('.kata-list');
  }
  doTest(title: string) {
    if (title === 'Exes and Ohs') {
      this._kataSolveService.xocompare();
    }
  }
}
