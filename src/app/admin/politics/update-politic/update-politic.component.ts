import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { politicNews } from 'src/app/module/politicalmodel';
import { PoliticalapiService } from 'src/app/servec/politicalapi.service';

@Component({
  selector: 'app-update-politic',
  templateUrl: './update-politic.component.html',
  styleUrls: ['./update-politic.component.css']
})
export class UpdatePoliticComponent {
  politicnews = new politicNews
  id!: any
  constructor(public service: PoliticalapiService, private activerout: ActivatedRoute, public router: Router) {
    this.service.auth();
    this.id = this.activerout.snapshot.paramMap.get('id');
    this.service.getById(this.id).subscribe((data) => {
      this.politicnews = data;
    })
  }
  updatesportn() {
    if (this.politicnews.content.length > 90) {
      this.politicnews.description = this.politicnews.content.substring(0, 80) + "..."
      this.service.update(this.id, this.politicnews).subscribe((data) => {
        this.router.navigateByUrl('/listpoliticadmin');
      })
    } else {
      this.politicnews.description = this.politicnews.content + "...";
      this.service.update(this.id, this.politicnews).subscribe((data) => {
        this.router.navigateByUrl('/listpoliticadmin');
      })
    }
  }
}
