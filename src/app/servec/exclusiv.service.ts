import { Injectable } from '@angular/core';
import { exclusivmodel } from '../module/exclusiv';
import { ApiFunctionservisService } from './api-functionservis.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExclusivService  extends ApiFunctionservisService<exclusivmodel> {

  constructor(public override http : HttpClient , public override router:Router) {
    super("http://localhost:3000/exclusiv",http,router)
   }
}
