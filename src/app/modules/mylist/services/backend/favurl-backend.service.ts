import { List } from 'immutable';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Result } from 'src/app/shared/interfaces/result';
import { FavurlDto } from '../../interfaces/favurl-dto-model';

@Injectable({
  providedIn: 'root',
})
export class FavurlBackendService {
  constructor(private http: HttpClient) {}

  private apiurl = environment.baseURL + '/api/favurls';

  get(favurlDto: FavurlDto): Observable<FavurlDto> {
    return this.http.get<FavurlDto>(this.apiurl + '/' + favurlDto.id);
  }

  delete(favurlDto: FavurlDto): Observable<void> {
    return this.http.delete<void>(this.apiurl + '/' + favurlDto.id);
  }

  update(favurlDto: FavurlDto): Observable<FavurlDto> {
    return this.http.put<FavurlDto>(this.apiurl, favurlDto);
  }

  insert(favurlDto: FavurlDto): Observable<FavurlDto> {
    return this.http.post<FavurlDto>(this.apiurl, JSON.stringify(favurlDto));
  }

  getList(type: string, sc: string): Observable<Result> {
    return this.http.get<Result>(
      this.apiurl + '/' + type + '?startCursor=' + sc
    );
  }
}
