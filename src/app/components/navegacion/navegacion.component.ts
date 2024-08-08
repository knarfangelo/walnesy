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
        <li><a href="">INICIO</a></li>
        <li><a href="">SOBRE MÍ</a></li>
        <li><a href="">MISIÓN</a></li>
        <li><a href="">BLOG</a></li>
        <li><a href="">AGENDA</a></li>
        <li><a href="">VOLUNTARIADO</a></li>
      </ul>

    </nav>
  `,
  styleUrl: './navegacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionComponent { }
