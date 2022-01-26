import { Favurlshow } from './../../interfaces/favurlshow';
import { Component, OnInit } from '@angular/core';
import { FavurlService } from 'src/app/services/favurl.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favurl-list',
  templateUrl: './favurl-list.component.html',
  styleUrls: ['./favurl-list.component.css'],
})
export class FavurlListComponent implements OnInit {
  type = '';
  sc = '';
  stop: boolean = false;
  busy: boolean = false;
  public FavURLShowList: Favurlshow[] = [];

  constructor(private favurlService: FavurlService, private router: Router) {
    // this.activatedRoute.url.subscribe((url) => {
    //   // Code to get the new notification data
    //   // and display it
    //   console.log(url[1].path);
    //   this.type=url[1].path
    //   this.favurlService.NextPage(this.type);
    //   console.log('url subscribe');
    // });
  }

  ngOnInit(): void {
    const urlstring = this.router.url;
    this.type = urlstring.substring(
      urlstring.lastIndexOf('/') + 1,
      urlstring.length
    );

    // console.log(this.type);

    this.getFavurlList();
    // this.activatedRoute.params.subscribe((params)=>{
    //   console.log('updatedParams', params);
    //   this.favurlService.NextPage(this.type);
    //   console.log('updatedParams', params);
    // });
  }

  getFavurlList() {
    if (this.stop) return;
    if (this.busy) return;

    // const params = new HttpParams()
    // .set('email', inputemail);

    this.favurlService.getFavurlList(this.type).subscribe((result) => {
      // console.log('call');
      var favurlshows = result.data.FavURLShows;
      for (var i = 0; i < favurlshows.length; i++) {
        favurlshows[i].show = true;
        favurlshows[i].deleteConfirmBox = false;
        var sendt = favurlshows[i].sendtime;
        favurlshows[i].sendtime = sendt;
        this.FavURLShowList.push(favurlshows[i]);
      }

      if (this.sc == result.data.startCursor) this.stop = true;

      this.sc = result.data.startCursor;

      this.busy = false;
    });
  }

  onScroll() {
    this.getFavurlList();
  }
}
