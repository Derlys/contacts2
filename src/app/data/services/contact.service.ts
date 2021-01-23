import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { Contact } from '../contact';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactsSubject = new BehaviorSubject<Contact[]>([
    {
      id: 'virginia',
      name: 'virginia dominguez',
      phone: 3012790300,
      email: 'derlys@gmail.com',
    },
    {
      id: 'Derlys',
      name: 'Derlys dominguez',
      phone: 3012790300,
      email: 'derlys@gmail.com',
    },
    {
      id: 'David',
      name: 'David dominguez',
      phone: 3012790300,
      email: 'derlys@gmail.com',
    },
    {
      id: 'Beeman',
      name: 'Beeman dominguez',
      phone: 3012790300,
      email: 'derlys@gmail.com',
    },
  ]);
  contacts$ = this.contactsSubject.asObservable();
  addContact(name: string, phone: number, email: string): void {
    // solicitar lista de contactos
    const contacts = this.contactsSubject.getValue();
    // crear nuevo contacto
    const contact: Contact = {
      id: new Date().getTime().toString(),
      email,
      name,
      phone,
    };
    // actualizar la lista de contactos
    this.contactsSubject.next([...contacts, contact]);
  }

  constructor() {}
}
