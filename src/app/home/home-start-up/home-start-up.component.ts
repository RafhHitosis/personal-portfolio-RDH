import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import sal from 'sal.js';
import { HeaderSixComponent } from '../../shared/header/header-six/header-six.component';
import { HeroBannerSixComponent } from '../../shared/components/hero-banner/hero-banner-six/hero-banner-six.component';
import { StartupFeatureComponent } from '../../shared/components/features/startup-feature/startup-feature.component';
import { AboutAreaFiveComponent } from '../../shared/components/about/about-area-five/about-area-five.component';
import { CounterAreaFourComponent } from '../../shared/components/counter/counter-area-four/counter-area-four.component';
import { ServiceAreaFiveComponent } from '../../shared/components/service/service-area-five/service-area-five.component';
import { StartupFeatureTwoComponent } from '../../shared/components/features/startup-feature-two/startup-feature-two.component';
import { SupportAreaOneComponent } from '../../shared/components/support/support-area-one/support-area-one.component';
import { TestimonialSixComponent } from '../../shared/components/testimonial/testimonial-six/testimonial-six.component';
import { PricingStartupComponent } from '../../shared/components/pricing/pricing-startup/pricing-startup.component';
import { FaqAreaTwoComponent } from '../../shared/components/faq/faq-area-two/faq-area-two.component';
import { BlogAreaFiveComponent } from '../../shared/components/blog/blog-area-five/blog-area-five.component';
import { CtaAreaThreeComponent } from '../../shared/components/cta/cta-area-three/cta-area-three.component';
import { FooterSixComponent } from '../../shared/footer/footer-six/footer-six.component';

@Component({
  selector: 'app-home-start-up',
  standalone: true,
  imports: [
    CommonModule,
    HeaderSixComponent,
    HeroBannerSixComponent,
    StartupFeatureComponent,
    AboutAreaFiveComponent,
    CounterAreaFourComponent,
    ServiceAreaFiveComponent,
    StartupFeatureTwoComponent,
    SupportAreaOneComponent,
    TestimonialSixComponent,
    PricingStartupComponent,
    FaqAreaTwoComponent,
    BlogAreaFiveComponent,
    CtaAreaThreeComponent,
    FooterSixComponent
  ],
  templateUrl: './home-start-up.component.html',
  styleUrl: './home-start-up.component.scss',
})
export class HomeStartUpComponent {
  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
