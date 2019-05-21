import {Component} from '@angular/core';
import {TabsService} from "./components/tabs/tabs.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private tabsService: TabsService) {

    }

    public tabs = [1, 2];

    public dec(): void {
        if (this.tabsService.activeTabIndex.value === this.tabs.length - 1) {
            this.tabsService.activeTabIndex.next(0);
        }
        this.tabs.pop();
    }

    public inc(): void {
        this.tabs.push((this.tabs.length + 1));
    }
}
