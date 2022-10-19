import { FavurlDto } from './../interfaces/favurl-dto-model';
import {
  BehaviorSubject,
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
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Result } from 'src/app/shared/interfaces/result';
import { List } from 'immutable';
import { FavurlBackendService } from './backend/favurl-backend.service';

@Injectable({
  providedIn: 'root',
})
export class FavurlService {
  sc = '';
  stop: boolean = false;
  busy: boolean = false;
  favurlType?: string;

  // private favurlDtoList$: Subject<List<FavurlDto>> = new Subject<
  //   List<FavurlDto>
  // >();
  // private favurlDtoList$ = new BehaviorSubject(List([]));
  private favurlDtoListSubject$: BehaviorSubject<FavurlDto[]> =
    new BehaviorSubject<FavurlDto[]>([]);

  // private conFavurlDtoList: List<FavurlDto> = List([]);
  // private lists: List[] = [];
  public favurlDtoListObs$ = this.favurlDtoListSubject$.asObservable();
  public clickLoad$: Subject<void> = new Subject<void>();

  private FavurlDtoList: FavurlDto[] = [];

  interval$ = interval(5000);
  refresh$ = merge(this.clickLoad$).pipe(startWith(true));

  constructor(private backendService: FavurlBackendService) {}

  /* getList(favurlType: string) {
    if (this.stop) return;
    if (this.busy) return;

    this.backendService
      .getList(favurlType, this.sc)
      .pipe(
        map((result) => result.data),
        // tap(data => console.log(data)),
        tap((data) => {
          // console.log("data.startCursor: "+ data.startCursor);
          if (this.sc == data.startCursor) this.stop = true;
          this.sc = data.startCursor;
          // console.log('this.sc: ' + this.sc);
        }),
        map((data) => data.FavurlDtoList)
      )
      .subscribe({
        next: (newFavurlDtoList) => {
          // this.conFavurlDtoList = this.conFavurlDtoList.push(newFavurlDtoList);
          this.favurlDtoList$.next(
            this.favurlDtoList$.getValue().concat(newFavurlDtoList)
          );
          this.busy = false;
        },
        error: (error) => console.log('Error retrieving Todos'),
      });
  }*/

  getList(favurlType: string) {
    // if (this.stop) return null;
    // if (this.busy) return null;
    console.log('getlist');
    this.backendService.getList(favurlType, this.sc).subscribe({
      next: (result) => {
        console.log(result);
        let data = result.data;
        if (this.sc == data.startCursor) this.stop = true;
        this.sc = data.startCursor;
        this.FavurlDtoList = result.data.FavurlDtoList;
        this.favurlDtoListSubject$.next(this.FavurlDtoList);
      },
      error: (error) => console.log('Error retrieving Todos'),
    });
  }

  updateView(favurlDto: FavurlDto) {
    let index = this.FavurlDtoList.findIndex((x) => x.id == favurlDto.id);
    this.FavurlDtoList[index] = favurlDto;
    this.favurlDtoListSubject$.next(this.FavurlDtoList);
  }

  removeFromList(favurlDto: FavurlDto) {
    let index = this.FavurlDtoList.findIndex((x) => x.id == favurlDto.id);
    this.FavurlDtoList.splice(index, 1);
    this.favurlDtoListSubject$.next(this.FavurlDtoList);
    this.update(favurlDto);
  }

  update(favurlDto: FavurlDto) {
    this.backendService.update(favurlDto).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => console.log('Error retrieving Todos'),
    });
  }
  /*
  NextPage(type: string) {
    if (this.stop) return;
    if (this.busy) return;

    if (type != null) {
      this.favurlType = type;
    }
    // const params = new HttpParams()
    // .set('email', inputemail);
    const url = this.apiurl + this.favurlType + '?startCursor=' + this.sc;
    this.http.get<Result>(url).subscribe((result) => {
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
  } */

  /*
    favurlService.prototype.NextPage = function(type) {
        if (this.stop) return;
        if (this.busy) return;


        if (type != null) {
            this.favurlType = type;
        }

        this.busy = true;

        $http.get("/api/favurl/" + this.favurlType + "?startCursor=" + this.sc).then(function(response) {
            var data = response.data;
            var favurlshows = data.FavURLShows;
            for (var i = 0; i < favurlshows.length; i++) {
                favurlshows[i].show = true;
                favurlshows[i].deleteConfirmBox = false;
                var sendt = getLocalSendTime(favurlshows[i].sendtime);
                favurlshows[i].sendtime = jQuery.timeago(sendt);
                this.FavURLShows.push(favurlshows[i]);
            }

            if (this.sc == data.startCursor)
                this.stop = true

            this.sc = data.startCursor;

            this.busy = false;
        }.bind(this));
    };


    favurlService.prototype.userNextPage = function(id) {
        if (this.stop) return;
        if (this.busy) return;

        this.busy = true;

        $http.get("/api/favurl/my?fromid=" + id + "&startCursor=" + this.sc).then(function(response) {
            var data = response.data;
            var favurlshows = data.FavURLShows;
            for (var i = 0; i < favurlshows.length; i++) {
                favurlshows[i].show = true;
                favurlshows[i].deleteConfirmBox = false;
                var sendt = getLocalSendTime(favurlshows[i].sendtime);
                favurlshows[i].sendtime = jQuery.timeago(sendt);
                this.FavURLShows.push(favurlshows[i]);
            }

            if (this.sc == data.startCursor)
                this.stop = true

            this.sc = data.startCursor;

            this.busy = false;
        }.bind(this));
    };


    favurlService.prototype.markRead = function(FavURLShow) {

        if (FavURLShow.status == 1)
            FavURLShow.status = 2;
        else
            FavURLShow.status = 1;

        if (this.favurlType != "fav") {
            FavURLShow.show = false;
        }

        var json = '[{"id":' + FavURLShow.id + ',"status":' + FavURLShow.status + '}]';
        $http({
            method: "POST",
            url: "/api/favurl/status",
            data: json,
        }).then(null, function() {
            if (FavURLShow.status == 1)
                FavURLShow.status = 2;
            else
                FavURLShow.status = 1;
            if (this.favurlType != "fav") {
                FavURLShow.show = true;
            }
        }.bind(this));
    };

    favurlService.prototype.markFav = function(FavURLShow, index) {

        FavURLShow.fav = !FavURLShow.fav;
        var data = FavURLShow.id + '&fav=' + FavURLShow.fav;

        if (this.favurlType == "fav") {
            if (FavURLShow.fav) {
                FavURLShow.show = true;
            } else {
                FavURLShow.show = false;
            }
        }

        $http({
            method: "POST",
            url: "/api/favurl/fav/update?id=" + data,
        }).then(null, function() {
            FavURLShow.fav = !fav;
            if (this.favurlType == "fav") {
                if (FavURLShow.fav) {
                    FavURLShow.show = true;
                } else {
                    FavURLShow.show = false;
                }
            }
        }.bind(this));

    };

    favurlService.prototype.markDelete = function(FavURLShow) {

        FavURLShow.deleteConfirmBox = false;

        var status = 3;

        FavURLShow.show = false;

        var json = '[{"id":' + FavURLShow.id + ',"status":' + status + '}]';
        $http({
            method: "POST",
            url: "/api/favurl/status",
            data: json
        }).then(null, function() {
            FavURLShow.show = true;
        }.bind(this));

    };


    favurlService.prototype.showDeleteConfirmBox = function(FavURLShow) {

        FavURLShow.deleteConfirmBox = true;


    };

    favurlService.prototype.hideDeleteConfirmBox = function(FavURLShow) {

        FavURLShow.deleteConfirmBox = false;

    };

    favurlService.prototype.search = function(word) {
        if (this.searchstop) return;
        if (this.busy) return;

        this.busy = true;

        $http.get("/api/favurl/search?word=" + word + '&startCursor=' + this.searchsc).then(function(response) {

            var data = response.data;
            var favurlshows = data.FavURLShows;

            if (favurlshows.length == 0 && this.searchsc == '') {
                this.showResult = true;
            } else {
                for (var i = 0; i < favurlshows.length; i++) {
                    favurlshows[i].show = true;
                    favurlshows[i].deleteConfirmBox = false;
                    var sendt = getLocalSendTime(favurlshows[i].sendtime);
                    favurlshows[i].sendtime = jQuery.timeago(sendt);
                    this.FavURLShows.push(favurlshows[i]);
                }
            }

            if (this.searchsc == data.startCursor)
                this.searchstop = true
            this.searchsc = data.startCursor;

            this.busy = false;

        }.bind(this));
    };

 */
}
