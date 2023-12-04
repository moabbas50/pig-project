import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/module/user';
import { UserapifunctionService } from 'src/app/servec/userapifunction.service';
import { CustomValidators } from 'ng2-validation';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  massege:string="";
constructor(public services:UserapifunctionService){
  this.services.auth();
}
userform = new FormGroup({
name: new FormControl("",[Validators.required,]),
email: new FormControl("",[Validators.required,CustomValidators.email]),
password: new FormControl("",[Validators.required]),
phone: new FormControl("",[Validators.required,CustomValidators.digits])
});
get name (){
  return this.userform.get('name')
}
get email (){
  return this.userform.get('email')
}
get password (){
  return this.userform.get('password')
}
get phone (){
  return this.userform.get('phone')
}


submit(){
  this.services.create(this.userform.value).subscribe((data)=>{
  })
  this.clear();
  this.massege='user create successful';
}
// clear value
embty=new FormGroup({
name: new FormControl("",),
email: new FormControl("",),
password: new FormControl("",),
phone: new FormControl("",)
})
clear() {
this.userform =(this.embty)
}
// end of clear value

}
