import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import sal from 'sal.js';
import { HeaderEightComponent } from '../../shared/header/header-eight/header-eight.component';
import { HeroBannerEightComponent } from '../../shared/components/hero-banner/hero-banner-eight/hero-banner-eight.component';
import { PersonalPortfolioFeatureComponent } from '../../shared/components/features/personal-portfolio-feature/personal-portfolio-feature.component';
import { ServiceAreaSevenComponent } from '../../shared/components/service/service-area-seven/service-area-seven.component';
import { PersonalPortfolioComponent } from '../../shared/components/portfolio/personal-portfolio/personal-portfolio.component';
import { PersonalPortSkillsComponent } from '../../shared/components/skills/personal-port-skills/personal-port-skills.component';
import { PersonalPortAwardsComponent } from '../../shared/components/awards/personal-port-awards/personal-port-awards.component';
import { TestimonialEightComponent } from '../../shared/components/testimonial/testimonial-eight/testimonial-eight.component';
import { BlogAreaSevenComponent } from '../../shared/components/blog/blog-area-seven/blog-area-seven.component';
import { PersonalPortContactComponent } from '../../shared/components/contact/personal-port-contact/personal-port-contact.component';
import { FooterEightComponent } from '../../shared/footer/footer-eight/footer-eight.component';

@Component({
  selector: 'app-home-personal-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    HeaderEightComponent,
    HeroBannerEightComponent,
    PersonalPortfolioFeatureComponent,
    ServiceAreaSevenComponent,
    PersonalPortfolioComponent,
    PersonalPortSkillsComponent,
    PersonalPortAwardsComponent,
    TestimonialEightComponent,
    BlogAreaSevenComponent,
    PersonalPortContactComponent,
    FooterEightComponent,
  ],
  templateUrl: './home-personal-portfolio.component.html',
  styleUrls: ['./home-personal-portfolio.component.scss'],
})
export class HomePersonalPortfolioComponent {
  ngAfterViewInit() {
    sal({ threshold: 0.1, once: true, root: null });
  }

  // Add the downloadPDF method
  downloadPDF() {
    const pdfURL = 'assets/files/CV-RafhHitosis.pdf'; // Correct relative path to the PDF file
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'CV-RafhHitosis.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
