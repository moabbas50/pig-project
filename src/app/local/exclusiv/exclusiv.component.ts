import { Component } from '@angular/core';
import { ExclusivService } from 'src/app/servec/exclusiv.service';

@Component({
  selector: 'app-exclusiv',
  templateUrl: './exclusiv.component.html',
  styleUrls: ['./exclusiv.component.css']
})
export class ExclusivComponent {
  exclusiv : any =[]
  constructor(public servic :ExclusivService){
    this.servic.get().subscribe((data)=>{
      this.exclusiv=data
      console.log(this.exclusiv)
    })

  }
}
