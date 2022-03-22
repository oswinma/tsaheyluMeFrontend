import { List } from 'immutable';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FavurlDto } from '../interfaces/favurlDto';
import { Result } from 'src/app/shared/interfaces/result';

@Injectable({
  providedIn: 'root',
})
export class FavurlBackendService {
  constructor(private http: HttpClient) {}

  private apiurl = environment.baseURL + '/api/favurl';

  get(favurlDto: FavurlDto): Observable<Object> {
    return this.http.get(this.apiurl + '/' + favurlDto.id);
  }

  delete(favurlDto: FavurlDto): Observable<Object> {
    return this.http.delete(this.apiurl + '/' + favurlDto.id);
  }

  update(favurlDto: FavurlDto): Observable<Object> {
    return this.http.put(this.apiurl, JSON.stringify(favurlDto));
  }

  insert(favurlDto: FavurlDto): Observable<Object> {
    return this.http.post(this.apiurl, JSON.stringify(favurlDto));
  }

  getList(type: string, sc: string): Observable<Result> {
    return this.http.get<Result>(
      this.apiurl + '/' + type + '?startCursor=' + sc
    );
  }
}
