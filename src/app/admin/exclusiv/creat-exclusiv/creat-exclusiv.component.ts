import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { exclusivmodel } from 'src/app/module/exclusiv';
import { ExclusivService } from 'src/app/servec/exclusiv.service';

@Component({
  selector: 'app-creat-exclusiv',
  templateUrl: './creat-exclusiv.component.html',
  styleUrls: ['./creat-exclusiv.component.css']
})
export class CreatExclusivComponent {
  news = new exclusivmodel();
  constructor(public servic :ExclusivService,public router:Router){}
 submit(){
   if(this.news.content.length>90){
     this.news.description=this.news.content.substring(0,80)+"..."
     this.servic.create(this.news).subscribe((data) => {
       this.router.navigateByUrl('/listexclusivadmin');
     })
   }else{
     this.news.description=this.news.content +"...";
     this.servic.create(this.news).subscribe((data) => {
       this.router.navigateByUrl('/listexclusivadmin');
     })
   }

 }
}
