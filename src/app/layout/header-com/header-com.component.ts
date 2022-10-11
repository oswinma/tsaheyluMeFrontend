import { Component, OnInit } from '@angular/core';
import {} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-com',
  templateUrl: './header-com.component.html',
  styleUrls: ['./header-com.component.css'],
})
export class HeaderComComponent implements OnInit {
  showComponent: boolean = false;
  urlstring?: string;
  type: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.urlstring = this.router.url;
    this.type = this.urlstring.substring(
      this.urlstring.lastIndexOf('/') + 1,
      this.urlstring.length
    );
    if (this.type != 'login') {
      this.showComponent = true;
      // console.log('header com');
    }
  }
}
