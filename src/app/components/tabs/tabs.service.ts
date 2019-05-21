import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable()
export class TabsService {

  constructor() { }

  public activeTabIndex: BehaviorSubject<number> = new BehaviorSubject<number>(0);
}
