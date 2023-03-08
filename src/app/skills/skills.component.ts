import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  hardSkills: Array<string> = ['Web & Mobile Development', 'Agile (SCRUM, DevOps)', 'Functional Programming', 'Object Oriented Programming'];
  lenguajesProgra: Array<string> = ['C++', 'C#', 'Clojure', 'CSS', 'HTML', 'JavaScript/TypeScript', 'PHP', 'Python', 'SASS/SCSS', 'Scheme/Racket', 'SQL', 'Swift'];
  herramientasProgra: Array<string> = ['Angular', 'Azure', 'Bootstrap', 'Firebase', 'Flask', 'iOS', 'MariaDB', 'Mesa', 'MySQL', 'Node JS', 'React JS', 'Unity'];
  softSkills: Array<string> = ['Self-taught', 'Empathy', 'Teamwork', 'Passion for Learning & Teaching', 'Communication'];
}
