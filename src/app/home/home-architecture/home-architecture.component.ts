import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import sal from 'sal.js';
import { register } from 'swiper/element/bundle';
register();
import { HeaderNineComponent } from '../../shared/header/header-nine/header-nine.component';
import { HeroBannerNineComponent } from '../../shared/components/hero-banner/hero-banner-nine/hero-banner-nine.component';
import { VideoPopupComponent } from '../../shared/components/modal/video-popup/video-popup.component';
import { UtilsService } from '../../shared/services/utils.service';
import { CounterAreaFiveComponent } from '../../shared/components/counter/counter-area-five/counter-area-five.component';
import { PortfolioArchitectureComponent } from '../../shared/components/portfolio/portfolio-architecture/portfolio-architecture.component';
import { ServiceAreaEightComponent } from '../../shared/components/service/service-area-eight/service-area-eight.component';
import { ArchitectureAwradsComponent } from '../../shared/components/awards/architecture-awrads/architecture-awrads.component';
import { TestimonialNineComponent } from '../../shared/components/testimonial/testimonial-nine/testimonial-nine.component';
import { TeamAreaFourComponent } from '../../shared/components/team/team-area-four/team-area-four.component';
import { BlogAreaEightComponent } from '../../shared/components/blog/blog-area-eight/blog-area-eight.component';
import { FooterNineComponent } from '../../shared/footer/footer-nine/footer-nine.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-architecture',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderNineComponent,
    HeroBannerNineComponent,
    CounterAreaFiveComponent,
    PortfolioArchitectureComponent,
    ServiceAreaEightComponent,
    ArchitectureAwradsComponent,
    TestimonialNineComponent,
    TeamAreaFourComponent,
    BlogAreaEightComponent,
    VideoPopupComponent,
    FooterNineComponent,
  ],
  templateUrl: './home-architecture.component.html',
  styleUrl: './home-architecture.component.scss',
})
export class HomeArchitectureComponent {
  constructor(public utilsService: UtilsService) {}

  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }
}
