import { Component } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
  intereses: Array<string> = ['Design', 'Human Languages', 'Programming', 'Technology', 'Videogames']
}
