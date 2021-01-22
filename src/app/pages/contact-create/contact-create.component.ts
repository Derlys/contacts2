import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss'],
})
export class ContactCreateComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  public submit() {
    // Use the form value to do authentication
    console.log(this.form.value);
    // Navigate after successful login
    return this.router.navigate(['/']);
  }
}
