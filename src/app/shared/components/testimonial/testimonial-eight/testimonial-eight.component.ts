import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-testimonial-eight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-eight.component.html',
  styleUrl: './testimonial-eight.component.scss'
})
export class TestimonialEightComponent {

  // thumb nav data
  public slider_thumb_nav = [
    '/assets/img/users/tinay.png',
    '/assets/img/users/merry.png',
    '/assets/img/users/divina.png',
    '/assets/img/users/carla.png',
  ];

  // testimonial data
  testimonial_data = [
    {
      heading: "Impressive Work",
      desc: "“ Your web development projects are always well-done and look professional. You have a great eye for detail! ”",
      name: "Christine Ann G. Tria",
    },
    {
      heading: "Creative Problem Solver",
      desc: "“ You always come up with smart and creative ways to solve issues in projects. It’s great working with you. ”",
      name: "Merry M. Rago",
    },
    {
      heading: "Supportive Team Member",
      desc: "“ You’re always willing to help and share your knowledge. It makes working on group projects so much better. ”",
      name: "Divine M. Reyes",
    },
    {
      heading: "Reliable Developer",
      desc: "“ Whenever we have a tough task, you handle it with ease. Your skills and dedication really stand out. ”",
      name: "Carla G. Fallar",
    },
  ];

  ngOnInit() {
    const swiper = new Swiper(".testimonial__slider-nav-9", {
      spaceBetween: 0,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper(".testimonial__slider-active-9", {
      slidesPerView: 1,
      spaceBetween: 0,
      thumbs: {
        swiper: swiper,
      },
      navigation: {
        nextEl: ".testimonial-9-button-next",
        prevEl: ".testimonial-9-button-prev"
      },
      autoplay: {
        delay: 8000,
      }
    });
  }
}
