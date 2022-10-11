import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Result } from 'src/app/shared/interfaces/result';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  sc = '';
  stop: boolean = false;
  busy: boolean = false;
  favurlType?: string;

  constructor(private http: HttpClient) {}



}
