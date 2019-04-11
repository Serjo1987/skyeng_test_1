import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabContentComponent {
  @Input() public tabContent: string;

  ngOnInit() {

  }
}
