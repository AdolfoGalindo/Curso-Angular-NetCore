import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }
  @Input()
  Peliculas;

  ngOnInit(): void {
   
  }

  Remover(IndicePelicula: number): void {
    this.Peliculas.splice(IndicePelicula,1)
  }

}
