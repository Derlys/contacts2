import { Component, OnInit } from '@angular/core';
import { Contact } from '../../data/contact';
import { Observable } from 'rxjs';
import { ContactService } from '../../data/services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
})
export class ContactDetailComponent implements OnInit {
  contact$: Observable<Contact | undefined> = this.route.params.pipe(
    map((params) => params.contactId),
    switchMap((id) => this.service.loadContact(id))
  );

  constructor(public route: ActivatedRoute, public service: ContactService) {}

  ngOnInit(): void {}
}
