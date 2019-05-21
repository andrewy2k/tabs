import {Component, Input, OnInit} from '@angular/core';
import {TabsService} from "./tabs.service";

@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

    @Input() tabs: number[];
    selectTab: number = 0;

    constructor( public tabS: TabsService) {
    }

    ngOnInit() {
    }

    tabClick(event: number): void {
        this.selectTab = event;
        this.tabS.activeTabIndex.next(event);
    }

}
