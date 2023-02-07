import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO } from '../actor';
import { actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  modelo: actorDTO = {nombre:'Felipe', fechaNacimiento: new Date(), foto: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Jennifer_Lopez.jpg'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      //alert(params.id);
    })
  }

  guardarCambios(actor:actorCreacionDTO){
    console.log(actor);
  }

}
