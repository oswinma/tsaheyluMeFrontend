import { FavurlDto } from '../../interfaces/favurl-dto-model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavurlService } from '../../services/favurl.service';
@Component({
  selector: 'app-favurl-row',
  templateUrl: './favurl-row.component.html',
  styleUrls: ['./favurl-row.component.css'],
})
export class FavurlRowComponent implements OnInit {
  @Input() favurlDto: FavurlDto = {
    show: true,
    deleteConfirmBox: true,
    id: 0,
    fromid: 0,
    toid: 0,
    url: '',
    status: 0,
    fstatus: 0,
    sendtime: new Date(),
    serial: 0,
    readtime: new Date(),
    comment: '',
    fav: true,
    channel: '',
    title: '',
    icon: '',
    host: '',
    nickname: '',
    avatarURL: '',
    urlid: 0,
    share: 0,
    favs: 0,
  };

  constructor(private favurlService: FavurlService) {}

  ngOnInit(): void {}

  @Output() handleMarkFav = new EventEmitter();

  markFav(): void {
    console.log('markFav');
    this.handleMarkFav.next(this.favurlDto);
  }
}
