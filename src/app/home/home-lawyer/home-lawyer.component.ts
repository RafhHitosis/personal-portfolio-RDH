import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { HeaderTwoComponent } from '../../shared/header/header-two/header-two.component';
import { HeroBannerTwoComponent } from '../../shared/components/hero-banner/hero-banner-two/hero-banner-two.component';
import { VideoAreaOneComponent } from '../../shared/components/video/video-area-one/video-area-one.component';
import { ServiceAreaTwoComponent } from '../../shared/components/service/service-area-two/service-area-two.component';
import { BlogAreaTwoComponent } from '../../shared/components/blog/blog-area-two/blog-area-two.component';
import { TestimonialTwoComponent } from '../../shared/components/testimonial/testimonial-two/testimonial-two.component';
import { TeamAreaTwoComponent } from '../../shared/components/team/team-area-two/team-area-two.component';
import { CounterAreaTwoComponent } from '../../shared/components/counter/counter-area-two/counter-area-two.component';
import { FooterTwoComponent } from '../../shared/footer/footer-two/footer-two.component';
import { LawyerContactComponent } from '../../shared/components/contact/lawyer-contact/lawyer-contact.component';
import sal from 'sal.js';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-lawyer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderTwoComponent,
    HeroBannerTwoComponent,
    VideoAreaOneComponent,
    ServiceAreaTwoComponent,
    BlogAreaTwoComponent,
    TestimonialTwoComponent,
    TeamAreaTwoComponent,
    CounterAreaTwoComponent,
    LawyerContactComponent,
    FooterTwoComponent,
  ],
  templateUrl: './home-lawyer.component.html',
  styleUrl: './home-lawyer.component.scss',
})
export class HomeLawyerComponent {
  public award_images = [
    '/assets/img/award/4/award-icon-1.png',
    '/assets/img/award/4/award-icon-2.png',
    '/assets/img/award/4/award-icon-3.png',
    '/assets/img/award/4/award-icon-4.png',
    '/assets/img/award/4/award-icon-2.png',
  ];

  public case_results = [
    {
      id: 1,
      bg: '/assets/img/case/case-1.jpg',
      price: 247,
      title: 'Personal Injury Claims and Gun What You Need to Know',
      text: 'If you are looking for a random city or town name to spark a location for a book, game, or a script millions.',
    },
    {
      id: 2,
      bg: '/assets/img/case/case-2.jpg',
      price: 176,
      title: 'Do Injured Workers Have to Be Treated the Same?',
      text: 'If you are looking for a random city or town name to spark a location for a book, game, or a script millions.',
    },
  ];

  history_lists = [
    {
      year: '2007 - 2012',
      title: 'Together We Build',
      text: 'In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.',
      meta: 'Family Law',
    },
    {
      year: '2012 - 2016',
      title: 'Completed 1000 Cases',
      text: 'In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.',
      meta: 'Criminal Law',
    },
    {
      year: '2016 - 2018',
      title: 'We Are Number One',
      text: 'In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.',
      meta: 'Business Law',
    },
    {
      year: '2018 - 2022',
      title: 'Intellectual Property',
      text: 'In quasi vitae non alias nulla qui dolores dolor non tempora tenetur.',
      meta: 'Car Accident',
    },
  ];

  ngOnInit(): void {
    new Swiper('.award__slider-active', {
      slidesPerView: 4,
      spaceBetween: 30,
      breakpoints: {
        '1400': {
          slidesPerView: 4,
        },
        '1200': {
          slidesPerView: 4,
        },
        '992': {
          slidesPerView: 4,
        },
        '768': {
          slidesPerView: 4,
        },
        '576': {
          slidesPerView: 4,
        },
        '0': {
          slidesPerView: 3,
        },
      },
    });
  }

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
