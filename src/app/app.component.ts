import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { BackToTopComponent } from './shared/components/back-to-top/back-to-top.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BackToTopComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'harry-angular';
  contactForm: FormGroup;
  formSubmitted = false;

  constructor(private router: Router, private fb: FormBuilder) {
    // Initialize the form group
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  // Form controls getters for validation
  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get message() {
    return this.contactForm.get('message');
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.contactForm.valid) {
      const formValues = this.contactForm.value;

      emailjs
        .send(
          'service_je8l22h', // Replace with your EmailJS Service ID
          'template_sf8412r', // Replace with your EmailJS Template ID
          {
            user_name: formValues.name,
            user_email: formValues.email,
            user_subject: formValues.subject,
            user_message: formValues.message,
          },
          'UaijWCclMSGGFpE1l' // Replace with your EmailJS Public Key
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log('Email sent successfully!', result.text);
            alert('Message sent successfully!');
            this.contactForm.reset();
            this.formSubmitted = false;
          },
          (error) => {
            console.error('Email sending failed:', error.text);
            alert('Failed to send the message. Please try again later.');
          }
        );
    }
  }
}
