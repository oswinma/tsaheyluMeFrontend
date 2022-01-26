import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css'],
})
export class HeaderNavComponent implements OnInit {
  urlstring?: string;
  type = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.urlstring = this.router.url;
    this.type = this.urlstring.substring(
      this.urlstring.lastIndexOf('/') + 1,
      this.urlstring.length
    );

  }
}
