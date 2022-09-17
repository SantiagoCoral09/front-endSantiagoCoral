import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { inicioSesion } from 'src/app/interfaces/inicioSesion';

@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html',
  styleUrls: ['./busquedas.component.css']
})
export class BusquedasComponent implements OnInit {
  
  inicioSesion: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inicioSesion = this.fb.group({
      usuario:['',Validators.required],
      passw:['',Validators.required]
      
    })
   }

  ngOnInit(): void {
  }

  iniciar(){
    console.log(this.inicioSesion);

    const inicio:inicioSesion={
      usuario: this.inicioSesion.get('usuario')?.value,
      passw: this.inicioSesion.get('passw')?.value
    }
    console.log(inicio);
  }

}
