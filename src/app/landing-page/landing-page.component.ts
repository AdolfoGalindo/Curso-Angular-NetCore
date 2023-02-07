import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
     this.PeliculasEnCines = [{
      Titulo:'Spiderman',
      FechaLanzamiento: new Date(),
      Precio: 1400.99,
      poster:'https://www.ecartelera.com/carteles/15800/15882/005_m.jpg'
     },
     {
      Titulo:'Moana',
      FechaLanzamiento: new Date('2016-11-14'),
      Precio: 300.99,
      poster:'https://i.pinimg.com/originals/52/8a/72/528a72c5a6d8ad104785c36f5ddf459c.jpg'
     }]
    
  }
 
  PeliculasEnCines;
  PeliculasProximosEstrenos = []

}
