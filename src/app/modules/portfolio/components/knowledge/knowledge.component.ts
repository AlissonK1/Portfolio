import { Component, Signal, signal } from '@angular/core';

//Interfaces
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5'
    },
    {
      src: 'icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3'
    },
    {
      src: 'icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript'
    },
    {
      src: 'icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular'
    },
    {
      src: 'icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de nodejs'
    },
  ])
}
