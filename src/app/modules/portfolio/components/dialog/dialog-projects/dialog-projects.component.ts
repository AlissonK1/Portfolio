import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

//Interface
import { IProjects } from '../../../interface/IIProjects.interface';

@Component({
  selector: 'app-dialog-projects',
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit{
  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects
  ){}

  public getData = signal<IProjects | null>(null);

  ngOnInit(): void {
      this.getData.set(this._data);
  }

  public closeModal(){
    return this._dialogRef.close();
  }
}