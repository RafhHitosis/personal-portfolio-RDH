import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import sal from 'sal.js';
import { HeaderElevenComponent } from '../../shared/header/header-eleven/header-eleven.component';
import { HeroBannerTenComponent } from '../../shared/components/hero-banner/hero-banner-ten/hero-banner-ten.component';
import { CtaAreaSixComponent } from '../../shared/components/cta/cta-area-six/cta-area-six.component';
import { PoliticianFeaturesComponent } from '../../shared/components/features/politician-features/politician-features.component';
import { VisionAreaOneComponent } from '../../shared/components/vision/vision-area-one/vision-area-one.component';
import { CounterAreaSixComponent } from '../../shared/components/counter/counter-area-six/counter-area-six.component';
import { EventAreaTwoComponent } from '../../shared/components/events/event-area-two/event-area-two.component';
import { PolityBiographyComponent } from '../../shared/components/biography/polity-biography/polity-biography.component';
import { TeamAreaFiveComponent } from '../../shared/components/team/team-area-five/team-area-five.component';
import { BlogAreaNineComponent } from '../../shared/components/blog/blog-area-nine/blog-area-nine.component';
import { TestimonialTenComponent } from '../../shared/components/testimonial/testimonial-ten/testimonial-ten.component';
import { FooterTenComponent } from '../../shared/footer/footer-ten/footer-ten.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-politician',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderElevenComponent,
    HeroBannerTenComponent,
    CtaAreaSixComponent,
    PoliticianFeaturesComponent,
    VisionAreaOneComponent,
    CounterAreaSixComponent,
    EventAreaTwoComponent,
    PolityBiographyComponent,
    TeamAreaFiveComponent,
    BlogAreaNineComponent,
    TestimonialTenComponent,
    FooterTenComponent,
  ],
  templateUrl: './home-politician.component.html',
  styleUrl: './home-politician.component.scss',
})
export class HomePoliticianComponent {
  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
