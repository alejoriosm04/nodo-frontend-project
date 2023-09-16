import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-slideshow',
  templateUrl: './main-slideshow.component.html',
  styleUrls: ['./main-slideshow.component.css']
})
export class MainSlideshowComponent {
  images = [
    { name: 'todo-el-laboratorio-2.jpg' },
    { name: 'image-1.jpg' },
    { name: 'image-2.jpg' },
    { name: 'percepcion-asombro.jpg' },
    { name: 'sala-creacion.jpg' },
    { name: 'sala-percepcion.jpg' },
  ];
}