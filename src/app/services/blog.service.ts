import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
appId: string = '659b2ecd8c866920984699e5';

baseUrl: string = 'https://dummyapi.io/data/v1';


  constructor(private http: HttpClient) { }

  GetBlogs(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': `${this.appId}`
    });
    return this.http.get(`${this.baseUrl}/user`, { headers });
  };


  deleteBlogs(id:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': `${this.appId}`
    });
    return this.http.delete(`${this.baseUrl}/user/${id}`, { headers });
  };

  getABlog(id:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': `${this.appId}`
    });
    return this.http.get(`${this.baseUrl}/user/${id}`, { headers });
  };

  createUser(body: any){
    console.log(body)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': `${this.appId}`
    });
    return this.http.post(`${this.baseUrl}/user/create`,body, { headers });
  }

  updateBlog(body: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id': `${this.appId}`
    });
    return this.http.put(`${this.baseUrl}/user/${body.id}`,body, { headers });
  }
}
