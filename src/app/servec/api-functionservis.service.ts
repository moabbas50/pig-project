import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiFunctionservisService<ty> {




  constructor(@Inject(String) public url:string, public http : HttpClient,public router : Router) { }

  get(): Observable<ty>{
    return this.http.get<ty>(this.url)
  }
  getById(id: any): Observable<ty> {
    return this.http.get<ty>(this.url + `/${id}`)
  }
  create(obj: any): Observable<ty> {
    return this.http.post<ty>(this.url, obj)
  }
  update(id: any, obj: ty): Observable<ty> {
    return this.http.put<ty>(this.url + `/${id}`, obj)
  }
  delet(id: any) {
    return this.http.delete(this.url + `/${id}`)
  }


  auth(){
    if(localStorage.getItem("admin")){

    }else{
      this.router.navigateByUrl("/login/user/admin")
    }
  }
}
