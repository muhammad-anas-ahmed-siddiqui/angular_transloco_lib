import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'transloco-example';

  constructor(private translocoService: TranslocoService) {}

  ngOnInit() {
  }


  changeLanguage(lang: string) {
    this.translocoService.setActiveLang(lang)
  }

}
