import { Component, inject, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IIProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'img/projects/netflix.png',
      alt: 'Projeto Clone Netflix',
      title: 'Site Clone Netflix',
      width: '35%',
      height: '100%',
      description: 
      '<p>Projeto clone do site da Netflix, criado para utilizar e aprimorar conceitos básicos de HTML, CSS, JS.</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://alissonk1.github.io/Netflix/',
        }
      ]
    },
    {
      src: 'img/projects/faq-accordion.svg',
      alt: 'Projeto FAQ Accordion',
      title: 'Projeto FAQ Accordion',
      width: '35%',
      height: '50%',
      description: 
      '<p>Projeto de um FAQ utilizando Accordion, criado para utilizar e aprimorar conceitos básicos de HTML, CSS, JS.</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://alissonk1.github.io/FAQ-Accordion-Card/',
        }
      ]
    }
  ])

  public opneDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,  {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }
} 
