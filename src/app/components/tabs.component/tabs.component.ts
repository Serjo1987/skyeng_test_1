import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  public tabs = [
    {id: 1, title: "title 1", content: "content 1", active: true},
    {id: 2, title: "title 2", content: "content 2", active: false},
    {id: 3, title: "title 3", content: "content 3", active: false}
  ];

  ngOnInit() {

  }

  public dec() {
    if (this.tabs[this.tabs.length - 1].active === true) this.tabs[0].active = true;
    this.tabs = this.tabs.slice(0, -1);
  }

  public inc() {
    this.tabs.push({
      id: this.tabs.length + 1,
      title: "title " + (this.tabs.length + 1),
      content: "content " + (this.tabs.length + 1),
      active: false
    });
  }

  public setActive(selectedTab) {
    for (let tab of this.tabs) {
      if (selectedTab.id === tab.id) tab.active = true;
      else tab.active = false;
    }
  }
}
