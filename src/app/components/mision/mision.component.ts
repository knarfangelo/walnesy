import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mision',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <p class="mision">MISIÓN</p>
      <div class="educacion">
        <img src="mision/educacion.png" alt="">
        <p>#Educación</p>
      </div>
      <div class="seguridad">
        <img src="mision/seguridad.png" alt="">
        <p>#Seguridad</p>
      </div>
      <div class="trabajo">
        <img src="mision/trabajo.png" alt="">
        <p>#Trabajo</p>
      </div>
    </header>
  `,
  styleUrl: './mision.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MisionComponent { }
