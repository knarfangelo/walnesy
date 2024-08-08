import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <img class="fondo" src="fondo-nosotros.jpg" alt="">
      <div class="tags-conteiner">
          <p class="tags">#FuerzaQueTeActiva</p>
      </div>
      <div class="contenido">
        <h1>Walnesy Borquez</h1>
        <p>Apasionado por la música el mar y aspirante a un mejor país, con valores inculcados por su familia y su formación, a su corta edad lo convierten en un ejemplo de liderazgo en el camino político y empresarial.</p>
        <a class="ver" href="">Ver más</a>
      </div>
    </header>
  `,
  styleUrl: './nosotros.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosotrosComponent { }
