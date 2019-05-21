import {Component, Input, OnInit} from '@angular/core';
import {TabsService} from "../tabs.service";
import index from "@angular/cli/lib/cli";

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() index;
  viewStatus: boolean;
  tabSelect$: any;

  constructor(private tabS:TabsService) {
  }

  ngOnInit() {
    this.tabSelect$ = this.tabS.activeTabIndex.asObservable();
    this.tabSelect$.subscribe(
        value => {
          this.viewStatus=this.index===value;
        }
    );
  }
}
