import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-personal-port-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './personal-port-form.component.html',
  styleUrl: './personal-port-form.component.scss',
})
export class PersonalPortFormComponent {
  public contactForm!: FormGroup;
  public formSubmitted = false;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      // phone: new FormControl(null), // Optional field
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.contactForm.valid) {
      this.isLoading = true;
      const formValues = this.contactForm.value;

      emailjs
        .send(
          'service_je8l22h', // Replace with your EmailJS Service ID
          'template_sf8412r', // Replace with your EmailJS Template ID
          {
            user_name: formValues.name,
            user_email: formValues.email,
            // user_phone: formValues.phone || 'N/A', // Handle optional phone
            user_subject: formValues.subject,
            user_message: formValues.message,
          },
          'UaijWCclMSGGFpE1l' // Replace with your EmailJS Public API Key
        )
        .then(
          (response) => {
            console.log('Email sent successfully!', response.text);
            this.successMessage = 'Message sent successfully!';
            alert(this.successMessage);
            this.contactForm.reset();
            this.formSubmitted = false;
            this.isLoading = false;
          },
          (error) => {
            console.error('Failed to send email:', error.text);
            this.errorMessage = 'Failed to send the message. Please try again later.';
            alert(this.errorMessage);
            this.isLoading = false;
          }
        );
    } else {
      console.error('Form is invalid');
    }
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  // get phone() {
  //   return this.contactForm.get('phone');
  // }
  get subject() {
    return this.contactForm.get('subject');
  }
  get message() {
    return this.contactForm.get('message');
  }
}
