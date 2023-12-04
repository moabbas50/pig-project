import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/module/user';
import { UserapifunctionService } from 'src/app/servec/userapifunction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  userpassword!: string;
  massege: string = "";
  constructor(public services: UserapifunctionService, private router: Router) {

  }
  submit() {
    this.services.get().subscribe((data: any) => {
      let user = data.find((userdata: any) => {
        return(this.username == userdata.name || this.username == userdata.email) && this.userpassword == userdata.password
      });
      if (user) {
        this.massege = "you are  admin "
        this.router.navigateByUrl("/homeadmin")
        localStorage.setItem("admin", `${this.username}`)
      } else {
        this.massege = "you are not admin "
        this.clear();
      };

    });
  };

  clear() {
    this.username = "";
    this.userpassword = "";
  }


}
