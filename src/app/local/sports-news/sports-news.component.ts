import { Component } from '@angular/core';
import { SportapiService } from 'src/app/servec/sportapi.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent {
  sport : any =[]
  constructor(public servic :SportapiService){
    this.servic.get().subscribe((data)=>{
      this.sport=data
      console.log(this.sport)
    })

  }
}
