import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RoundModel } from 'src/app/models/RoundModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  private roundUrl: string = '/api/round';

  constructor(private http: HttpClient) { }

  getRounds(): Observable<RoundModel[]> {
    return this.http.get<RoundModel[]>(this.roundUrl,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


}
