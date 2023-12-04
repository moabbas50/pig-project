import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiFunctionservisService } from './api-functionservis.service';
import { spotNews } from '../module/spotrmodel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends ApiFunctionservisService<spotNews> {

  constructor(public override http : HttpClient , public override router:Router) {
    super("http://localhost:3000/exclusiv",http,router)
   }
}
