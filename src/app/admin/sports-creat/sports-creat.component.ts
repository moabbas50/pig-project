import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { spotNews } from 'src/app/module/spotrmodel';
import { SportapiService } from 'src/app/servec/sportapi.service';

@Component({
  selector: 'app-sports-creat',
  templateUrl: './sports-creat.component.html',
  styleUrls: ['./sports-creat.component.css']
})
export class SportsCreatComponent {
 news = new spotNews();
 constructor(public servic :SportapiService,public router:Router){
  this.servic.auth();
 }
submit(){
  if(this.news.content.length>90){
    this.news.description=this.news.content.substring(0,80)+"..."
    this.servic.create(this.news).subscribe((data) => {
      this.router.navigateByUrl('/listsportadmin');
    })
  }else{
    this.news.description=this.news.content +"...";
    this.servic.create(this.news).subscribe((data) => {
      this.router.navigateByUrl('/listsportadmin');
    })
  };
}
}
