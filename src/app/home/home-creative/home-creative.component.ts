import { CtaAreaFourComponent } from './../../shared/components/cta/cta-area-four/cta-area-four.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import sal from 'sal.js';
import { HeaderSevenComponent } from '../../shared/header/header-seven/header-seven.component';
import { HeroBannerSevenComponent } from '../../shared/components/hero-banner/hero-banner-seven/hero-banner-seven.component';
import { ServiceAreaSixComponent } from '../../shared/components/service/service-area-six/service-area-six.component';
import { AboutAreaSixComponent } from '../../shared/components/about/about-area-six/about-area-six.component';
import { PortfolioCreativeComponent } from '../../shared/components/portfolio/portfolio-creative/portfolio-creative.component';
import { TeamAreaThreeComponent } from '../../shared/components/team/team-area-three/team-area-three.component';
import { BlogAreaSixComponent } from '../../shared/components/blog/blog-area-six/blog-area-six.component';
import { TestimonialSevenComponent } from '../../shared/components/testimonial/testimonial-seven/testimonial-seven.component';
import { BrandFourComponent } from '../../shared/components/brand/brand-four/brand-four.component';
import { CtaAreaFiveComponent } from '../../shared/components/cta/cta-area-five/cta-area-five.component';
import { FooterSevenComponent } from '../../shared/footer/footer-seven/footer-seven.component';

@Component({
  selector: 'app-home-creative',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderSevenComponent,
    HeroBannerSevenComponent,
    ServiceAreaSixComponent,
    AboutAreaSixComponent,
    CtaAreaFourComponent,
    PortfolioCreativeComponent,
    TeamAreaThreeComponent,
    BlogAreaSixComponent,
    TestimonialSevenComponent,
    BrandFourComponent,
    CtaAreaFiveComponent,
    FooterSevenComponent,
  ],
  templateUrl: './home-creative.component.html',
  styleUrl: './home-creative.component.scss',
})
export class HomeCreativeComponent {

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
