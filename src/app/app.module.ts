import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {TestComponent} from './test.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {TabComponent} from './components/tabs/tab/tab.component';
import {TabTitleComponent} from './components/tabs/tab/tab-title/tab-title.component';
import {TabContentComponent} from './components/tabs/tab/tab-content/tab-content.component';
import {TabsService} from "./components/tabs/tabs.service";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HelloComponent, TestComponent, TabsComponent, TabComponent, TabTitleComponent, TabContentComponent],
    bootstrap: [AppComponent],
    schemas: [],
    providers:[TabsService,]
})
export class AppModule {
}
