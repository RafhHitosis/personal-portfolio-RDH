import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import sal from 'sal.js';
import { HeaderThreeComponent } from '../../shared/header/header-three/header-three.component';
import { HeroBannerThreeComponent } from '../../shared/components/hero-banner/hero-banner-three/hero-banner-three.component';
import { BrandSliderOneComponent } from '../../shared/components/brand/brand-slider-one/brand-slider-one.component';
import { AboutAreaTwoComponent } from '../../shared/components/about/about-area-two/about-area-two.component';
import { PortfolioFreelancerComponent } from '../../shared/components/portfolio/portfolio-freelancer/portfolio-freelancer.component';
import { FreelancerSkillsComponent } from '../../shared/components/skills/freelancer-skills/freelancer-skills.component';
import { FreelancerAwardComponent } from '../../shared/components/awards/freelancer-award/freelancer-award.component';
import { TestimonialThreeComponent } from '../../shared/components/testimonial/testimonial-three/testimonial-three.component';
import { BlogAreaThreeComponent } from '../../shared/components/blog/blog-area-three/blog-area-three.component';
import { FooterThreeComponent } from '../../shared/footer/footer-three/footer-three.component';
import { CtaAreaOneComponent } from '../../shared/components/cta/cta-area-one/cta-area-one.component';

@Component({
  selector: 'app-home-freelancer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderThreeComponent,
    HeroBannerThreeComponent,
    BrandSliderOneComponent,
    AboutAreaTwoComponent,
    PortfolioFreelancerComponent,
    FreelancerSkillsComponent,
    FreelancerAwardComponent,
    TestimonialThreeComponent,
    BlogAreaThreeComponent,
    CtaAreaOneComponent,
    FooterThreeComponent,
  ],
  templateUrl: './home-freelancer.component.html',
  styleUrl: './home-freelancer.component.scss',
})
export class HomeFreelancerComponent {

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
