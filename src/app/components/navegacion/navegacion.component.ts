import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <nav>
      <img class="logo" src="logo.png" alt="">
      <img class="burguer" src="responsive.svg" alt="">
      <ul class="lista">
        <li><a href="">INICIO</a></li>
      </ul>
      
      <img class="dominicana" src="republica-dominicana.svg" alt="">
    </nav>
  `,
  styleUrl: './navegacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionComponent { }
