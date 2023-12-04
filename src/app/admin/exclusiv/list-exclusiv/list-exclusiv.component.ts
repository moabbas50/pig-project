import { Component } from '@angular/core';
import { ExclusivService } from 'src/app/servec/exclusiv.service';

@Component({
  selector: 'app-list-exclusiv',
  templateUrl: './list-exclusiv.component.html',
  styleUrls: ['./list-exclusiv.component.css']
})
export class ListExclusivComponent {
  allnews : any =[]

  constructor(public servic :ExclusivService){
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
