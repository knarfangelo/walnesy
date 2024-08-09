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
      <ul>
        <li><a href=""><img src="logo.png" alt=""></a></li>
        <li><a href="#inicio">INICIO</a></li>
        <li><a href="#nosotros">SOBRE MÍ</a></li>
        <li><a href="#mision">MISIÓN</a></li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#agenda">AGENDA</a></li>
        <li><a href="#voluntariado">VOLUNTARIADO</a></li>
      </ul>

    </nav>
  `,
  styleUrl: './navegacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionComponent { }
