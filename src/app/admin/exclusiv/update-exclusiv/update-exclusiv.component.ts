import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { exclusivmodel } from 'src/app/module/exclusiv';
import { ExclusivService } from 'src/app/servec/exclusiv.service';

@Component({
  selector: 'app-update-exclusiv',
  templateUrl: './update-exclusiv.component.html',
  styleUrls: ['./update-exclusiv.component.css']
})
export class UpdateExclusivComponent {
  exclusiv = new exclusivmodel()
  id!: any
  constructor(public service: ExclusivService, private activerout: ActivatedRoute, public router: Router) {
    this.service.auth();
    this.id = this.activerout.snapshot.paramMap.get('id');
    this.service.getById(this.id).subscribe((data) => {
      this.exclusiv = data;
      console.log(data);
    })
  }
  updatesportn() {
    if (this.exclusiv.content.length > 90) {
      this.exclusiv.description = this.exclusiv.content.substring(0, 80) + "..."
      this.service.update(this.id, this.exclusiv).subscribe((data) => {
        this.router.navigateByUrl('/listexclusivadmin');
      })
    } else {
      this.exclusiv.description = this.exclusiv.content + "...";
      this.service.update(this.id, this.exclusiv).subscribe((data) => {
        this.router.navigateByUrl('/listexclusivadmin');
      })
    }
  }
}
