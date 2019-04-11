import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabTitleComponent {
  @Input() public tabTitle: string;

  ngOnInit() {

  }
}
