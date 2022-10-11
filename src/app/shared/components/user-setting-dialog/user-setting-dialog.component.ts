import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-setting-dialog',
  templateUrl: './user-setting-dialog.component.html',
  styleUrls: ['./user-setting-dialog.component.css'],
})
export class UserSettingDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
}
