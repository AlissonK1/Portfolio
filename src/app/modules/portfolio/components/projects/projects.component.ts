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
      src: '/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description: 
      '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular</p>',
      links: [
        {
          name: 'Conheça o Blog ',
          href: 'https://vidafullstack.com.br',
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
