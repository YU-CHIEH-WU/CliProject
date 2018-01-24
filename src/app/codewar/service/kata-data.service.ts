import { Injectable } from '@angular/core';

@Injectable()
export class KataDataService {

  constructor() { }
  kataList = [
    {
      'title': 'Exes and Ohs',
      'link': 'https://www.codewars.com/kata/55908aad6620c066bc00002a/train/typescript',
      'describe': '1',
      'status': 'done',
      'result': ''
    }, {
      'title': 'Moves in squared strings (I)',
      'link': 'https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/typescript',
      'describe': '2',
      'status': 'done',
      'result': ''
    }, {
      'title': 'Regex validate PIN code',
      'link': 'https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/typescript',
      'describe': '3',
      'status': 'done',
      'result': ''
    }, {
      'title': 'Two To One',
      'link': 'https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/typescript',
      'describe': '4',
      'status': 'done',
      'result': ''
    }, {
      'title': 'Avergae of number',
      'link': 'https://www.codewars.com/kata/57d2807295497e652b000139/train/typescript',
      'describe': '5',
      'status': 'done',
      'result': ''
    }
  ];
  getKataList() {
    return this.kataList;
  }
}
export class Kata {
  title: string;
  link: string;
  describe: string;
  status: string;
  result: string;
}
