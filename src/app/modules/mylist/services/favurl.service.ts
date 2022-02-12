import { Observable } from 'rxjs';
import { Favurlshow } from './../interfaces/favurlshow';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Result } from 'src/app/shared/interfaces/result';

@Injectable({
  providedIn: 'root',
})
export class FavurlService {
  sc = '';
  stop: boolean = false;
  busy: boolean = false;
  favurlType?: string;

  constructor(private http: HttpClient) {}

  private apiurl = environment.baseURL + '/api/favurl/';
  public FavURLShowList: Favurlshow[] = [];

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
  }

  getFavurlList(type: string): Observable<Result> {
    if (type != null) {
      this.favurlType = type;
    }
    const url = this.apiurl + this.favurlType + '?startCursor=' + this.sc;
    return this.http.get<Result>(url);
  }

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
