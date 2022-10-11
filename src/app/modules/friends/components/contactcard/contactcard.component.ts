import { ContactDto } from '../../interfaces/ContactDto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactcard',
  templateUrl: './contactcard.component.html',
  styleUrls: ['./contactcard.component.css'],
})
export class ContactcardComponent implements OnInit {
  constructor() {}

  contactDto?: ContactDto;
  ngOnInit(): void {}
}
