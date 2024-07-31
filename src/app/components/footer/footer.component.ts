import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <footer>
  <div class="footer-container">
    <div class="footer-logo">
      <img src="logo.png" alt="Logo">
    </div>
    <div class="footer-links">
      <h3>Mapa del Sitio</h3>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Conóceme</a></li>
        <li><a href="#">Misión</a></li>
        <li><a href="#">Agenda</a></li>
        <li><a href="#">Voluntariado</a></li>
      </ul>
    </div>
    <div class="footer-contact">
      <h3>Contacto</h3>
      <p>Email: contacto&#64;fuerzadelpueblo.com</p>
      <p>Teléfono: 912345678</p>
      <p>Dirección: Calle Sin Nombres #123</p>
    </div>
  </div>
  <div class="footer-social">
    <a href="#"><img src="/icon/facebook-icon.svg" alt="Facebook"></a>
    <a href="#"><img src="/icon/linkedin-icon.svg" alt="LinkedIn"></a>
    <a href="#"><img src="/icon/youtube-icon.svg" alt="YouTube"></a>
    <a href="#"><img src="/icon/instagram-icon.svg" alt="Instagram"></a>
  </div>
  <div class="footer-credits">
    <p>Desarrollada por ChooseAgencia © 2024</p>
  </div>
</footer>

  `,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
