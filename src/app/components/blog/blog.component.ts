import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { IBlog } from './blogDB/IBlog';
import blogList from './blogDB/blogJSON';
import { SwiperOptions } from 'swiper/types';
register();
@Component({
  selector: 'app-blog',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
  ],
  template: `
    <header>    <img class="fondo" src="blog/fondo-blog.png" alt="">
  <h1 class="titulo">  BLOG
    </h1>
  <main>

    
    <swiper-container init=false class="swiper-blog">
       @for (item of swiperObjects; track $index) {
          <swiper-slide><div class="slide-custom">
            <div class="contenido">
            </div>
            <img class="imagen" [src]="item.img" alt="">
        </div>
          </swiper-slide>
            }  
         
    </swiper-container>
          <button class="swiper-button-prev"> < </button>    
          <button class="swiper-button-next"> > </button> 
          </main></header> `,
  styleUrl: './blog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent { 

  swiperElements = signal<SwiperContainer | null>(null);
  swiperObjects: IBlog[] = blogList;

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-blog');
    const swiperOptions: SwiperOptions = {
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      slidesPerView: 'auto',
      speed: 3000,
      loop: true,
      spaceBetween: 50,
      breakpoints: {
        0:{
          slidesPerView:1,
        },
        640: {
          slidesPerView:2,
        },
        1024: {
          slidesPerView:3,
        },
      },
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();
  }


}

