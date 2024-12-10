import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { register } from 'swiper/element';
register();

@Component({
  selector: 'app-personal-portfolio',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './personal-portfolio.component.html',
  styleUrl: './personal-portfolio.component.scss'
})
export class PersonalPortfolioComponent {

  public portfolio_items = [
    {
      id: 1,
      img: '/assets/img/portfolio/9/lms.png',
      tag: "Web based",
      title: "Library Managements System",
    },
    {
      id: 2,
      img: '/assets/img/portfolio/9/icstmgs.png',
      tag: "Mobile Grading System Web based Admin",
      title: "ICST Mobile Grading System",
    }
  ]

  ngOnInit() {
    new Swiper('.portfolio__slider-active-9', {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: ".portfolio-slider-dot-9",
        clickable: true,
      },
      navigation: {
        nextEl: ".portfolio-button-next-9",
        prevEl: ".portfolio-button-prev-9",
      },
      scrollbar: {
        el: ".tp-scrollbar",
      },
      breakpoints: {
        '1601': {
          slidesPerView: 4,
        },
        '1400': {
          slidesPerView: 3,
        },
        '1200': {
          slidesPerView: 2,
        },
        '992': {
          slidesPerView: 2,
        },
        '768': {
          slidesPerView: 1,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }
}
