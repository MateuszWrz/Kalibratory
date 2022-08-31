import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { KalibratorySzczegoly } from '../models/kalibratory-szczegoly';

@Injectable({
  providedIn: 'root',
})
export class SzczegolyService {
  constructor(private http: HttpClient) {}
  getData(matnr): Observable<KalibratorySzczegoly[]> {
    return this.http.get<KalibratorySzczegoly[]>(
      environment.baseURL + 'KalibratoryPozycje/' + matnr.split('/').join('__')
    );
  }
}
