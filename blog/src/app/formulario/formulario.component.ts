import { Component, OnInit } from '@angular/core';

interface Artigo{
  titulo: string;
  autor: string;
  data: string;
  post: string;

}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  artigo: Artigo={
    titulo: '',
    autor: '',
    data: '',
    post: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.artigo);
  }
}
