import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { InicioComponent } from "../inicio/inicio.component";
import { NosotrosComponent } from "../nosotros/nosotros.component";
import { MisionComponent } from "../mision/mision.component";
import { BlogComponent } from "../blog/blog.component";
import { AgendaComponent } from "../agenda/agenda.component";
import { VoluntariadoComponent } from "../voluntariado/voluntariado.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-walnesy',
  standalone: true,
  imports: [
    NavegacionComponent,
    InicioComponent,
    NosotrosComponent,
    MisionComponent,
    BlogComponent,
    AgendaComponent,
    VoluntariadoComponent,
    FooterComponent
],
  template: `
    <app-inicio id="inicio"></app-inicio>
    <app-nosotros id="nosotros"></app-nosotros>
    <app-mision id="mision"></app-mision>
    <app-blog id="blog"></app-blog>
    <app-agenda id="agenda"></app-agenda>
    <app-voluntariado id="voluntariado"></app-voluntariado>
    <app-footer></app-footer>
  `,
  styleUrl: './walnesy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WalnesyComponent { }
