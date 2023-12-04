import { Injectable } from '@angular/core';
import { spotNews } from '../module/spotrmodel';
import { ApiFunctionservisService } from './api-functionservis.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SportapiService  extends ApiFunctionservisService<spotNews>{

  constructor( public override http:HttpClient,public override router:Router) {
    super("http://localhost:3000/news",http,router)
   }
}
