import { Component } from '@angular/core';
import { SportapiService } from 'src/app/servec/sportapi.service';

@Component({
  selector: 'app-listsportadmin',
  templateUrl: './listsportadmin.component.html',
  styleUrls: ['./listsportadmin.component.css']
})
export class ListsportadminComponent {
  allnews : any =[]

  constructor(public servic :SportapiService){
    this.servic.auth();
    this.servic.get().subscribe((data)=>{
      this.allnews=data
    })
  }
  remove( id: any){
    this.servic.delet(id).subscribe((data)=>{
      location.reload();
    })

  }
}
