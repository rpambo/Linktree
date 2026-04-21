import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  translateY = 0;
  imgOpacity = 1;
  year = new Date().getFullYear();

@HostListener('window:scroll', [])
onWindowScroll() {
  const scrollY = window.scrollY;
  const start = 0;
  const end = window.innerHeight;

  const progress = Math.min(
    Math.max((scrollY - start) / (end - start), 0),
    1
  );

  this.translateY = progress * -380;
  this.imgOpacity = 1 - progress*2; // imagem some à medida que perfil sobe
}
}
