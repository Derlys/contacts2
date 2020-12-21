import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private items: Contact[] = [
    {
      id: 'virginia',
      name: 'virginia dominguez',
      phone: '3012790300',
      email: 'derlys@gmail.com',
    },
    {
      id: 'Derlys',
      name: 'Derlys dominguez',
      phone: '3012790300',
      email: 'derlys@gmail.com',
    },
    {
      id: 'David',
      name: 'David dominguez',
      phone: '3012790300',
      email: 'derlys@gmail.com',
    },
    {
      id: 'Beeman',
      name: 'Beeman dominguez',
      phone: '3012790300',
      email: 'derlys@gmail.com',
    },
  ];
  constructor() {}
  contacts$(): Observable<Contact[]> {
    return of(this.items);
  }
}
