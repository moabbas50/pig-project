import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ApiFunctionservisService } from 'src/app/servec/api-functionservis.service';
import { SportapiService } from 'src/app/servec/sportapi.service';
import { spotNews } from 'src/app/module/spotrmodel';
import { ExclusivService } from 'src/app/servec/exclusiv.service';
import { PoliticalapiService } from 'src/app/servec/politicalapi.service';

@Component({
  selector: 'app-shownews',
  templateUrl: './shownews.component.html',
  styleUrls: ['./shownews.component.css']
})
export class ShownewsComponent {
  spacific!: any
  showNews = new spotNews();
  id!: any;
  it!: any;
  url!: any
  constructor(public servic: SportapiService, public servec: ExclusivService, public sarvec: PoliticalapiService, private activ: ActivatedRoute) {

    this.id = this.activ.snapshot.paramMap.get('id')
    this.it = this.activ.snapshot.paramMap.get('it')
    console.log(this.it)
    if (this.it == 1) {
      this.sarvec.getById(this.id).subscribe((data) => {
        this.showNews = data
      });
      this.servec.get().subscribe((exc) => {
        this.spacific = exc
        this.url = "exclusiv"
      });
      
    } else if (this.it == 2) {
      this.servic.getById(this.id).subscribe((data) => {
        this.showNews = data
      });
      this.sarvec.get().subscribe((pol) => {
        this.spacific = pol
        this.url = "politcs"
      });

    } else if (this.it == 3) {
      this.servec.getById(this.id).subscribe((daTa) => {
        this.showNews = daTa
      });
      this.servic.get().subscribe((spor) => {
        this.spacific = spor
        this.url = "sportsnews"
      });
    }
  }

}
