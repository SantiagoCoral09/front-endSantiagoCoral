import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentarios';

@Component({
  selector: 'app-listar-comentarios',
  templateUrl: './listar-comentarios.component.html',
  styleUrls: ['./listar-comentarios.component.css']
})
export class ListarComentariosComponent implements OnInit {

  ///este tipo de dato es el que definimos en la interfaz, sera un ARREGLO
  listComentarios: Comentario []=[
    {
      titulo:'Cibersecurity',
      autor: 'Santiago Coral',
      fechaCreacion: new Date(), texto:'Ejemplo'
    },
    {
      titulo:'Robotics',
      autor: 'Andrea Ballesteros',
      fechaCreacion: new Date(), texto:'La robótica esencial para...'
    },
    {
      titulo:'Finances',
      autor: 'Alejandra Sanchez',
      fechaCreacion: new Date(), texto:'Se usa en finanzas para...'
    },
    {
      titulo:'Administration',
      autor: 'Dario Romo',
      fechaCreacion: new Date(), texto:'Es importante su administración...'
    },
    {
      titulo:'Education',
      autor: 'Elizabeth Ramirez',
      fechaCreacion: new Date(), texto:'En la educación vemos muchos beneficios...'
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
