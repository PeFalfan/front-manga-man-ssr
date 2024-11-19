import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer 33777c26-68fd-42fc-9f5f-815908942d26'
    })
  }

  private usersURL = 'https://firebasestorage.googleapis.com/v0/b/mangaman-770dc.appspot.com/o/documents%2Fusers.json?alt=media&token=33777c26-68fd-42fc-9f5f-815908942d26'

  getUsers(): Observable<any> {
    return this.http.get(this.usersURL, this.httpOptions);
  }
}
