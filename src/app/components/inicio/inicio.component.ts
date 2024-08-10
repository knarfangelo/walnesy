import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent
],
  template: `

      <app-navegacion></app-navegacion>
     
            <header>
        <main>
        <div class="contenido">
        </div>
        <img class="colegio" src="/inicio/vallacontigo.jpg" alt="">
      </main>
  </header>
     


  `,
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { }
