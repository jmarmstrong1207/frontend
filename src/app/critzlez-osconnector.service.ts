import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CritzlezOSConnectorService {

  constructor(private http: HttpClient) { }

  getBotStartObservable(b: string): Observable<botStart> {
    return this.http.put<any>("/api/CritzlezOS/botstart", { botStart: b });
  }

  getBotStartStatusObservable(): Observable<botStart> {
    //  const h = await this.http.get<botStart>("/api/CritzlezOS/botstartstatus").toPromise();
    return this.http.get<botStart>("/api/CritzlezOS/botstartstatus");
  }
}
export interface botStart {
  botStart: string;
}
export interface Data {
  str: string,
  num: any
}
