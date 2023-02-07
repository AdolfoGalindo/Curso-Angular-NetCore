import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent {

  constructor(private router:Router, private generoServices:GenerosService) { }

  guardarCambios(genero:generoCreacionDTO){
    //...Guardar cambios
        this.generoServices.crear(genero).subscribe(() =>{
        this.router.navigate(['/generos']);
        });     
    // }
    // this.generoServices.crear(genero).subscribe({
    //  next: () => this.router.navigate(['/generos']),
    //  error: (error) => console.error(error)      
    // })
  }

  
}
