import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpOptions = {
    headers: new HttpHeaders({
      'content-Type':'application/json'
    })
  }

  localhost=environment.localhost
  constructor(private http:HttpClient) {}

  shorturl(url:Object) :Observable<any>{
    return this.http.post(`${this.localhost}/users/shorturl`,url,this.httpOptions)
  }
  shorturlcheck(urlid:string | null) :Observable<any>{
    return this.http.post(`${this.localhost}/users/shorturlcheck`,{urlid},this.httpOptions)
  }

}
