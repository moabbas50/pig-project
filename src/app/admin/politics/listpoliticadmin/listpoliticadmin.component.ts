import { Component } from '@angular/core';
import { PoliticalapiService } from 'src/app/servec/politicalapi.service';

@Component({
  selector: 'app-listpoliticadmin',
  templateUrl: './listpoliticadmin.component.html',
  styleUrls: ['./listpoliticadmin.component.css']
})
export class ListpoliticadminComponent {
  allnews : any =[]

  constructor(public servic :PoliticalapiService){
    this.servic.auth();
    this.servic.get().subscribe((data)=>{
      this.allnews=data
    })
  }
  remove( id: any){
    this.servic.delet(id).subscribe(()=>{
      location.reload();
    })
  }
}
