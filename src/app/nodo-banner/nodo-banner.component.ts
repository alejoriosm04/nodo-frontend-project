import { Component } from '@angular/core';

@Component({
  selector: 'app-nodo-banner',
  templateUrl: './nodo-banner.component.html',
  styleUrls: ['./nodo-banner.component.css']
})
export class NodoBannerComponent {
  images = [
    { name: 'banner-fundamentals.jpg', link: 'https://www.nodoeafit.com/curso/1/fundamentals' },
    { name: 'banner-frontend.jpg', link: 'https://www.nodoeafit.com/curso/2/frontend' },
    { name: 'banner-backend.jpg', link: 'https://www.nodoeafit.com/curso/3/backend' },
    { name: 'banner-cloud-native.jpg', link: 'https://www.nodoeafit.com/curso/2019/cloud-native' },
    { name: 'banner-python.jpg', link: 'https://www.nodoeafit.com/curso/2026/python' },
  ];
}
