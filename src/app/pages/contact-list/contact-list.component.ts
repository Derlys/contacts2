import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../data/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts$ = this.service.contacts$;
  constructor(private readonly service: ContactService) {}

  ngOnInit(): void {}
}
