import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { FavurlStatus } from './../../interfaces/favurl-status';
import { FavurlDto } from './../../interfaces/favurl-dto-model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  find,
  first,
  interval,
  map,
  merge,
  Observable,
  scan,
  startWith,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { FavurlService } from '../../services/favurl.service';

@Component({
  selector: 'app-favurl-list',
  templateUrl: './favurl-list.component.html',
  styleUrls: ['./favurl-list.component.css'],
  providers: [FavurlService],
})
export class FavurlListComponent implements OnInit {
  // @Input() type: string='';

  type = '';

  // public click$: Subject<void> = new Subject<void>();
  // interval$ = interval(5000);

  // refresh$ = merge(this.click$).pipe(startWith(true));

  // public view$: Observable<FavurlDto[]> = new Observable<FavurlDto[]>();

  constructor(private favurlService: FavurlService, private router: Router) {
    const urlstring = this.router.url;
    // console.log(urlstring);
    this.type = urlstring.substring(
      urlstring.lastIndexOf('/') + 1,
      urlstring.length
    );

    /*     this.view$ = this.refresh$.pipe(
      switchMap(() => this.favurlService.getList(this.type)),
      scan((acc, value) => acc.concat(value))
    ); */

    switch (this.type) {
      case 'new':
        this.favurlService.getList(FavurlStatus.NEW);
        break;
      case 'archive':
        this.favurlService.getList(FavurlStatus.ARCHIVE);
        break;
      case 'fav':
        this.favurlService.getListByFav(true);
        break;
    }
  }

  markFav(favurlDto: FavurlDto) {
    this.favurlService.updateView(favurlDto);
  }

  get view$() {
    return this.favurlService.favurlDtoListObs$;
  }
  get clickLoad$() {
    return this.favurlService.clickLoad$;
  }

  ngOnInit(): void {}
}
