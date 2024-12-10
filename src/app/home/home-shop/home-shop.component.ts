import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderTwelveComponent } from '../../shared/header/header-twelve/header-twelve.component';
import { HeroBannerElevenComponent } from '../../shared/components/hero-banner/hero-banner-eleven/hero-banner-eleven.component';
import Swiper from 'swiper';
import {register} from 'swiper/element';
import product_data from '../../shared/data/product-data';
import { ProductItemComponent } from '../../shared/components/product-item/product-item.component';
import { FooterElevenComponent } from '../../shared/footer/footer-eleven/footer-eleven.component';
import { ProductModalComponent } from '../../shared/components/product-modal/product-modal.component';
import { CtaEightComponent } from '../../shared/components/cta/cta-eight/cta-eight.component';
import { RouterModule } from '@angular/router';
register();

@Component({
  selector: 'app-home-shop',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderTwelveComponent,HeroBannerElevenComponent,ProductItemComponent,CtaEightComponent,FooterElevenComponent,ProductModalComponent],
  templateUrl: './home-shop.component.html',
  styleUrl: './home-shop.component.scss'
})
export class HomeShopComponent {

  public top_rated_products = [...product_data].filter((item) => item.topRated);
  public best_selling_products = [...product_data].filter((item) => item.best_selling);
  public latest_products = [...product_data].filter((item) => item.latest);
  // products category data
 public products_category = [
  {
    img: '/assets/img/product/category/product-cat-1.jpg',
    title: "Call Phone & Tablets",
  },
  {
    img: '/assets/img/product/category/product-cat-2.jpg',
    title: "Game & Video",
  },
  {
    img: '/assets/img/product/category/product-cat-3.jpg',
    title: "Sport Watches",
  },
  {
    img: '/assets/img/product/category/product-cat-4.jpg',
    title: "Computers & Laptop",
  },
  {
    img: '/assets/img/product/category/product-cat-2.jpg',
    title: "Kids & Baby",
  },
]

  ngOnInit () {
    new Swiper('.product__category-slider-active', {
      slidesPerView: 4,
      spaceBetween: 30,
      scrollbar: {
        el: ".tp-scrollbar",
      },
      breakpoints: {
        '1601': {
          slidesPerView: 4,
        },
        '1400': {
          slidesPerView: 4,
        },
        '1200': {
          slidesPerView: 4,
        },
        '992': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '0': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }
}
