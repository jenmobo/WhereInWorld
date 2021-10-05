import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }
  APIKEY = '9205e77b9119aa655bd230a5caf7a971';
  countryAll = 'http://api.countrylayer.com/v2/all?access_key='+this.APIKEY;
  country = 'http://api.countrylayer.com/v2/name/';

  getAllCountry() {
    return this.http.get(this.countryAll);
  }
  getCountry(name) {
    return this.http.get(this.country + name + '?access_key=' + this.APIKEY + '&FullText=true');
  }
}
