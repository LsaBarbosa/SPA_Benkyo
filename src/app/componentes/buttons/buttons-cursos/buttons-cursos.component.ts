import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-cursos',
  templateUrl: './buttons-cursos.component.html',
  styleUrls: ['./buttons-cursos.component.css'],
})
export class ButtonsCursosComponent implements OnInit {
  img: string = '../../../assets/botao/inscreva/MATRICULE-SE 2.png';
  ngOnInit(): void {
    this.img;
  }
}
