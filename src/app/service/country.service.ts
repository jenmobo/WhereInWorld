import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  filter: object;
  receivedFilter: EventEmitter<object>;

  constructor() {
    this.receivedFilter = new EventEmitter<object>();
  }
  raiseEvent(filter: object): void {
    this.filter = filter;
    this.receivedFilter.emit(filter);
  }

}
