import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-voluntariado',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <img class="fondo" src="/blog/fondo-blog.png" alt="">
      <div class="contenido">
      <h1>Fuerza que te activa</h1>
      <p>La política es un medio para servir y lo hacemos con el propósito de impulsar el liderazgo transformador.
      </p>

      <div class="voluntariado">
        <h1>¡UNÉTE AL VOLUNTARIADO!</h1>
        <input type="text" placeholder="Ingresa tu correo electrónico">
      </div>
      <img class="walnesy" src="WALNESY.png" alt="">
    </div>      

    </header>
  `,
  styleUrl: './voluntariado.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoluntariadoComponent { 



 }
