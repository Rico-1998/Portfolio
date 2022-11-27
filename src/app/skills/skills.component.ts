import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',

  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})


export class SkillsComponent {
  symbols: Array<string> = [
    'angular.svg',
    'typescript.svg',
    'javascript.svg',
    'html.svg',
    'firebase.svg',
    'git.svg',
    'css.svg',
    'api.svg',
    'scrum.svg',
    'materialDesign.svg'
  ];

  names: Array<string> = [
    'Angular',
    'Typescript',
    'Javascript',
    'HTML',
    'Firebase',
    'Git',
    'CSS',
    'Rest-Api',
    'Scrum',
    'Material Design'
  ]
}
