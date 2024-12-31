import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';

import { Sneaker } from '../../models/sneaker.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-create-sneaker',
  standalone: true,
  imports: [],
  templateUrl: './edit-create-sneaker.component.html',
  styleUrl: './edit-create-sneaker.component.scss'
})
export class EditCreateSneakerComponent {
  constructor(
    public dialogRef: MatDialogRef<EditCreateSneakerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { sneaker: Sneaker; edit: boolean }
  ) {}

  onCancel() {
    this.dialogRef.close();
  }
}
