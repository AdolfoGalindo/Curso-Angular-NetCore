import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Location} from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private location: Location,
    private activatedRoute:ActivatedRoute) { }

  form:FormGroup

  generos = [
    {id:1, nombre:'Drama'},
    {id:2, nombre:'Acción'},
    {id:3, nombre:'Comedia'}
  ]

  peliculas =[
    {titulo:'Spider-Man Far from Home', enCines:false, proximosEstrenos:true, generos:[1,2],poster:'https://www.ecartelera.com/carteles/15800/15882/005_m.jpg'},
    {titulo:'Moana', enCines:true, proximosEstrenos:false, generos:[3],poster:'https://i.pinimg.com/originals/52/8a/72/528a72c5a6d8ad104785c36f5ddf459c.jpg'},
    {titulo:'Inception', enCines:false, proximosEstrenos:false, generos:[1,3],poster:'https://i.blogs.es/89d7af/inception-poster/1366_2000.jpg'}
  ]

  peliculasOriginal = this.peliculas;

  formularioOriginal={
    titulo:'',
    generoId:0,
    proximosEstrenos:false,
    enCines:false
  };

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);
    

    this.form.valueChanges
    .subscribe(valores =>{
      this.peliculas=this.peliculasOriginal;
      this.buscarPeliculas(valores);

      this.escribirParametrosBusquedaEnURL();
    })
  }

  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params)=>{
      var objeto: any = {};

      if(params.titulo){
        objeto.titulo = params.titulo;
      }

      if(params.generoId){
        objeto.generoId = Number (params.generoId);
      }

      if(params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }

      if(params.enCines){
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto);

    });
  }

  private escribirParametrosBusquedaEnURL(){
    var queryString = [];
    var valoresFormulario = this.form.value;

    if (valoresFormulario.titulo){
      queryString.push(`titulo=${valoresFormulario.titulo}`);
    }

    if (valoresFormulario.generoId != 0){
      queryString.push(`generoId=${valoresFormulario.generoId}`);
    }

    if (valoresFormulario.proximosEstrenos){
      queryString.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }

    if (valoresFormulario.enCines){
      queryString.push(`enCines=${valoresFormulario.enCines}`);
    }

    this.location.replaceState('peliculas/buscar',queryString.join('&'));


  }

  buscarPeliculas(valores:any){
    if (valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }

    if (valores.generoId !== 0 ){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }

    if (valores.proximosEstrenos ){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }
    if (valores.enCines ){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }

  }
  
  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }

}
