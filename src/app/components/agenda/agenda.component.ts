import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { IAgenda } from './agendaDB/IAgenda';
import { agendaJSON } from './agendaDB/agendaJSON';
register();
@Component({
  selector: 'app-agenda',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
  ],
  template: `
       <header>
  <h1 class="titulo">  AGENDA
    </h1>
  <main>    
    <swiper-container init=false class="swiper-agenda">
       @for (item of swiperObjects; track $index) {
          <swiper-slide><div class="slide-custom">
           <img class="imagen" [src]="item.img" alt="">
            <div class="contenido">
              <p>{{item.date |  date:'dd/MM/yyyy'}}</p>
              <h2>{{item.title}}</h2>
              <p>{{item.description}}</p>  
            </div>
            <button class="buton-slide">Leer más</button>
        </div>
          </swiper-slide>
            }  
         
    </swiper-container>
          <button class="swiper-button-agenda-prev"> < </button>    
          <button class="swiper-button-agenda-next"> > </button> 

          </main></header>
  `,
  styleUrl: './agenda.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgendaComponent {  

  swiperElements = signal<SwiperContainer | null>(null);
  swiperObjects: IAgenda[] = agendaJSON;

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-agenda');
    const swiperOptions: SwiperOptions = {
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-agenda-next',
        prevEl:'.swiper-button-agenda-prev',
      },
      slidesPerView: 'auto',
      speed: 2000,
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
