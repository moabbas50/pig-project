import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { politicNews } from 'src/app/module/politicalmodel';

import { PoliticalapiService } from 'src/app/servec/politicalapi.service';

@Component({
  selector: 'app-creat-politic',
  templateUrl: './creat-politic.component.html',
  styleUrls: ['./creat-politic.component.css']
})
export class CreatPoliticComponent {
  news = new politicNews();
  constructor(public servic: PoliticalapiService, public router: Router) {
    this.servic.auth(); }
  submit() {
    if (this.news.content.length > 90) {
      this.news.description = this.news.content.substring(0, 80) + "..."
      this.servic.create(this.news).subscribe((data) => {
        this.router.navigateByUrl('/listpoliticadmin');
      })
    } else {
      this.news.description = this.news.content + "...";
      this.servic.create(this.news).subscribe((data) => {
        this.router.navigateByUrl('/listpoliticadmin');
      })
    };

  }
}
