import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { spotNews } from 'src/app/module/spotrmodel';
import { SportapiService } from 'src/app/servec/sportapi.service';

@Component({
  selector: 'app-sports-update',
  templateUrl: './sports-update.component.html',
  styleUrls: ['./sports-update.component.css']
})
export class SportsUpdateComponent {
sprtnews = new spotNews
id!:any
constructor(public service:SportapiService,private activerout:ActivatedRoute,public router :Router){
  this.service.auth();
this.id=this.activerout.snapshot.paramMap.get('id');
this.service.getById(this.id).subscribe((data)=>{
  this.sprtnews=data;
})
}
updatesportn(){
  if(this.sprtnews.content.length>90){
    this.sprtnews.description=this.sprtnews.content.substring(0,80)+"..."
    this.service.update(this.id,this.sprtnews).subscribe((data) => {
      this.router.navigateByUrl('/listsportadmin');
    })
  }else{
    this.sprtnews.description=this.sprtnews.content +"...";
    this.service.update(this.id,this.sprtnews).subscribe((data) => {
      this.router.navigateByUrl('/listsportadmin');
    })
  }
}
}
