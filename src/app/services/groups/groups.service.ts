import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupModel } from 'src/app/models/GroupModel';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {


  private groupURL: string = '/api/group';

  constructor(private http: HttpClient) { }


  create(model: GroupModel): Observable<GroupModel> {
    return this.http.post<GroupModel>(this.groupURL, model,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  update(model: GroupModel, id: number): Observable<GroupModel> {
    return this.http.put<GroupModel>(this.groupURL + '/' + id, model,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  getGroups(): Observable<GroupModel[]> {
    return this.http.get<GroupModel[]>(this.groupURL,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }


}
