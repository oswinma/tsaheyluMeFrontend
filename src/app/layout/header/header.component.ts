import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserSettingDialogComponent } from 'src/app/shared/components/user-setting-dialog/user-setting-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openMenu() {
    this.showMenu = !this.showMenu;
  }
}
