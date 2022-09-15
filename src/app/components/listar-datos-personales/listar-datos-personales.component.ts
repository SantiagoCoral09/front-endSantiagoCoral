import { Component, OnInit } from '@angular/core';
import { DatosPersonales } from 'src/app/interfaces/DatosPersonales';

@Component({
  selector: 'app-listar-datos-personales',
  templateUrl: './listar-datos-personales.component.html',
  styleUrls: ['./listar-datos-personales.component.css']
})
export class ListarDatosPersonalesComponent implements OnInit {

  listarDatosPersonales: DatosPersonales []=[
    {
      id:1088219264,
      nombre:'Santiago',
      apellido:'Coral',
      direccion:'Cl 12 no5-10',
      email:'santiagocoral80@gmail.com',
      telefono:3122913686
    }
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
