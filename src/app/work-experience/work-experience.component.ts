import { Component } from '@angular/core';

interface Repositorio {
  nombre: string,
  liga: string
}

interface InfoWorkExperience {
  proyecto: string,
  puesto: string,
  lugar: string,
  duracion: string,
  descripcion: string,
  repositorio: Array<Repositorio>
}

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  Experiencias: Array<InfoWorkExperience> = [
    {proyecto: 'SMILE ANALYSIS WEB APP', puesto: 'SOFTWARE ENGINEER INTERN', lugar: 'TECNOLÓGICO DE MONTERREY', duracion: 'SEP 2022 - NOW', descripcion: 'Development of an Angular web app for the smile analysis of the people shot by a webcam from their computer. It was used Azure due to the services of Blob Storage and Face. Deployment is on Microsoft SharePoint.', repositorio: []},
    {proyecto: 'GYM WEB APP', puesto: 'SOFTWARE ENGINEER INTERN', lugar: 'TECNOLÓGICO DE MONTERREY', duracion: 'SEP 2022 - NOW', descripcion: 'On a scholarship service college project, I develop in team a web app (PHP), so coaches from Wellness Center Gym can manage their students and statistics, as well as workout routines that will be available for students. For database we used MySQL.', repositorio: []},
    {proyecto: 'TRAFFIC SIMULATION', puesto: 'SOFTWARE ENGINEER INTERN', lugar: 'IBM', duracion: 'OCT 2022 - DIC 2022', descripcion: 'I developed in team a simulation of box stacking robots on Unity, independently their behaviour was coded on Python with Mesa framework, focused on multiagents.', repositorio: [{nombre: 'Repo', liga: 'https://github.com/DannyJr08/Reto-Sistemas-Multiagentes_Movilidad-Urbana'}]},
    {proyecto: 'EDUCATIONAL WEB APP', puesto: 'SOFTWARE ENGINEER INTERN', lugar: 'CAPA X CAPA', duracion: 'JUN 2022 - DIC 2022', descripcion: 'On a college social service project, I had to develop in team a web app (React JS) to show and expose the activities, goals, and teaching content to students from Capa X Capa in order to help them to reach more people they can aid and teach.', repositorio: []},
    {proyecto: 'HEART CARE WEB & MOBILE APP', puesto: 'SOFTWARE ENGINEER INTERN', lugar: 'SECRETARÍA DE SALUD', duracion: 'AGO 2022 - OCT 2022', descripcion: 'On a college project in association with Secretaría de Salud, I developed in team an iOS app addressed to heart disease patients, so they can register their blood pressure and pulse, check their statistics, and link with their medics in order to view their prescriptions. It was also developed a React JS web app, so medics can manage their patient, view their statistics, and assign prescriptions. For backend we used Firebase.', repositorio: [{nombre: 'Mobile', liga: 'https://github.com/omarsinho/SaludOS-Movil'}, {nombre: 'Web', liga: 'https://github.com/DannyJr08/los-trabajos-de-steve_ssa-web'}]},
    {proyecto: 'HUMAN RESOURCES WEB APP', puesto: 'SOFTWARE ENGINEER INTERN', lugar: 'DENSO MÉXICO SA DE CV', duracion: 'FEB 2022 - MAY 2022', descripcion: 'On a college project in association with Denso, I developed in team a web app (React JS) to filter applicants, with a database (MariaDB) that collects candidates\' information from a psychometric test (Unity) they previously take. API was developed with Python (Flask).', repositorio: [{nombre: 'Frontend', liga: 'https://github.com/jaiovi/Denso-Git'}, {nombre: 'Backend', liga: 'https://github.com/jaiovi/Boilerplate-Denso-API'}]},
  ];
}
