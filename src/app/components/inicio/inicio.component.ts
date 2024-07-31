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
  <header>
      <app-navegacion></app-navegacion>
      <img src="/inicio/inicio.png" alt="">
  </header>

  `,
  styleUrl: './inicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { }
