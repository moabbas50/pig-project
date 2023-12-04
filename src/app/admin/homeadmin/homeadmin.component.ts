import { Component } from '@angular/core';
import { HomeService } from 'src/app/servec/home.service';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.component.html',
  styleUrls: ['./homeadmin.component.css']
})
export class HomeadminComponent {
constructor(public service : HomeService){
  this.service.auth();
}
}
