import { Component } from '@angular/core';

interface Certificacion {
  nombre: string,
  institucion: string,
  fecha: string,
  id: string,
  liga: string
}

@Component({
  selector: 'app-achievements-certificates',
  templateUrl: './achievements-certificates.component.html',
  styleUrls: ['./achievements-certificates.component.css']
})
export class AchievementsCertificatesComponent {
  certificaciones: Array<Certificacion> = [
    {nombre: 'GIT+GitHub: Todo un sistema de control de versiones de cero', institucion: 'Udemy', fecha: 'DIC 2022', id: 'UC-7569144-93f2-44ed-83a3-b0bdc4f712e5', liga: 'https://www.udemy.com/certificate/UC-75f69144-93f2-44ed-83a3-b0bdc4f712e5/'},
    {nombre: 'B2 English', institucion: 'Pearson', fecha: 'OCT 2019', id: '', liga: ''}
  ];
}
