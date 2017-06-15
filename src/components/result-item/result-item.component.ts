import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'result-item',
  templateUrl: 'result-item.component.html'
})
export class ResultItem implements OnInit{

  @Input('result') result;

  constructor() {}

  ngOnInit() {
      this.result.title = this.result.name.split(',')[0];
  }

}
