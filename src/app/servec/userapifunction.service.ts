import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiFunctionservisService } from './api-functionservis.service';
import { user } from '../module/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserapifunctionService extends ApiFunctionservisService<user> {
  constructor(public override http:HttpClient ,public override router:Router) {
    super("http://localhost:3000/users",http,router)
   }
}
