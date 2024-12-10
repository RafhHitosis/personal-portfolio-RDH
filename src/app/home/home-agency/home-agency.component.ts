import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import sal from 'sal.js';
import { HeaderFourComponent } from '../../shared/header/header-four/header-four.component';
import { HeroBannerFourComponent } from '../../shared/components/hero-banner/hero-banner-four/hero-banner-four.component';
import { ServiceThreeComponent } from '../../shared/components/service/service-three/service-three.component';
import { AboutAreaThreeComponent } from '../../shared/components/about/about-area-three/about-area-three.component';
import { CounterAreaThreeComponent } from '../../shared/components/counter/counter-area-three/counter-area-three.component';
import { PortfolioAgencyComponent } from '../../shared/components/portfolio/portfolio-agency/portfolio-agency.component';
import { AgencyAwardComponent } from '../../shared/components/awards/agency-award/agency-award.component';
import { PricingAgencyComponent } from '../../shared/components/pricing/pricing-agency/pricing-agency.component';
import { TestimonialFourComponent } from '../../shared/components/testimonial/testimonial-four/testimonial-four.component';
import { BrandSliderTwoComponent } from '../../shared/components/brand/brand-slider-two/brand-slider-two.component';
import { BlogAreaFourComponent } from '../../shared/components/blog/blog-area-four/blog-area-four.component';
import { FooterFourComponent } from '../../shared/footer/footer-four/footer-four.component';
import { CtaAreaTwoComponent } from '../../shared/components/cta/cta-area-two/cta-area-two.component';

@Component({
  selector: 'app-home-agency',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderFourComponent,
    HeroBannerFourComponent,
    ServiceThreeComponent,
    AboutAreaThreeComponent,
    CounterAreaThreeComponent,
    PortfolioAgencyComponent,
    AgencyAwardComponent,
    PricingAgencyComponent,
    TestimonialFourComponent,
    BrandSliderTwoComponent,
    BlogAreaFourComponent,
    CtaAreaTwoComponent,
    FooterFourComponent
  ],
  templateUrl: './home-agency.component.html',
  styleUrl: './home-agency.component.scss',
})
export class HomeAgencyComponent {
  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
