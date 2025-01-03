import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

import { Sneaker } from '../../models/sneaker.model';
import { EditSneakerPricesComponent } from '../edit-sneaker-prices/edit-sneaker-prices.component';

@Component({
  selector: 'app-edit-create-sneaker',
  standalone: true,
  imports: [
    FormsModule,
    MatLabel,
    MatFormField,
    MatDialogClose,
    MatInputModule,
    CommonModule
  ],
  templateUrl: './edit-create-sneaker.component.html',
  styleUrl: './edit-create-sneaker.component.scss'
})
export class EditCreateSneakerComponent {
  constructor(
    public dialogRef: MatDialogRef<EditCreateSneakerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { sneaker: Sneaker; edit: boolean },
    private dialog: MatDialog
  ) {}

  openEditPricesDialog() {
    const dialogRef = this.dialog.open(EditSneakerPricesComponent, {
      width: '800px',
      data: { precios: this.data.sneaker.precios }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.data.sneaker.precios = result;
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
