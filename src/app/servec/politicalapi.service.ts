import { Injectable } from '@angular/core';
import { ApiFunctionservisService } from './api-functionservis.service';
import { politicNews } from '../module/politicalmodel';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PoliticalapiService extends ApiFunctionservisService<politicNews> {

  constructor( public override http:HttpClient,public override router:Router) {
    super("http://localhost:3000/political",http,router)
  }
}
