import { Injectable } from '@angular/core';
import { RESPONSE } from './api.mock';
import { Observable, of } from 'rxjs';
import { TelespazioEvent } from '../model/TelespazioEvent';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  get(): Observable<TelespazioEvent[]> {
    return of(RESPONSE)
  }
}
