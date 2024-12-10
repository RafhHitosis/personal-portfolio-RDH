import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import sal from 'sal.js';
import { HeaderFiveComponent } from '../../shared/header/header-five/header-five.component';
import { HeroBannerFiveComponent } from '../../shared/components/hero-banner/hero-banner-five/hero-banner-five.component';
import { AboutAreaFourComponent } from '../../shared/components/about/about-area-four/about-area-four.component';
import { PortfolioPhotographerComponent } from '../../shared/components/portfolio/portfolio-photographer/portfolio-photographer.component';
import { PricingPhotographerComponent } from '../../shared/components/pricing/pricing-photographer/pricing-photographer.component';
import { ServiceAreaFourComponent } from '../../shared/components/service/service-area-four/service-area-four.component';
import { TestimonialFiveComponent } from '../../shared/components/testimonial/testimonial-five/testimonial-five.component';
import { BrandThreeComponent } from '../../shared/components/brand/brand-three/brand-three.component';
import Swiper from 'swiper';
import { InstagramAreaOneComponent } from '../../shared/components/instagram/instagram-area-one/instagram-area-one.component';
import { FooterFiveComponent } from '../../shared/footer/footer-five/footer-five.component';

@Component({
  selector: 'app-home-photographer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderFiveComponent,
    HeroBannerFiveComponent,
    AboutAreaFourComponent,
    PortfolioPhotographerComponent,
    PricingPhotographerComponent,
    ServiceAreaFourComponent,
    TestimonialFiveComponent,
    BrandThreeComponent,
    InstagramAreaOneComponent,
    FooterFiveComponent,
  ],
  templateUrl: './home-photographer.component.html',
  styleUrl: './home-photographer.component.scss',
})
export class HomePhotographerComponent {

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
