import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParticipantModel } from 'src/app/models/ParticipantModel ';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  private participantURL: string = '/api/participant';

  constructor(private http: HttpClient) { }

  create(model: ParticipantModel): Observable<ParticipantModel> {
    return this.http.post<ParticipantModel>(this.participantURL, model,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  update(model: ParticipantModel, id: number): Observable<ParticipantModel> {
    return this.http.put<ParticipantModel>(this.participantURL + '/' + id, model,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  getParticipant(): Observable<ParticipantModel[]> {
    return this.http.get<ParticipantModel[]>(this.participantURL,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

}
