import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { Contact } from '../contact';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactsSubject = new BehaviorSubject<Contact[]>([]);
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
    localStorage.setItem('contacts', JSON.stringify([...contacts, contact]));
  }
  loadContact(id: string) {
    return of(
      this.contactsSubject.getValue().find((contact) => contact.id === id)
    );
  }

  constructor() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      const parsed = JSON.parse(contacts);
      this.contactsSubject.next(parsed);
    }
  }
}
