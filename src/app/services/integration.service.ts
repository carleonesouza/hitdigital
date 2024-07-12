import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  private _data: BehaviorSubject<any | null> = new BehaviorSubject(null);
  
  constructor(private _httpClient: HttpClient) { }

  getData(page = 0, size = 10) {
    return this._httpClient.get<any[]>(environment.apiManager)
      .pipe(
        tap((result) => {
          this._data.next(result);
        }),
        catchError(err => {
          throw 'error in source. Details: ' + err;
        })
      );
  }

}
