import { Component, Inject } from '@angular/core';
import { Price } from '../../models/price.model';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-edit-sneaker-prices',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatDialogClose,
    MatInput,
    CommonModule
  ],
  templateUrl: './edit-sneaker-prices.component.html',
  styleUrl: './edit-sneaker-prices.component.scss'
})
export class EditSneakerPricesComponent {
  precios: Price[];

  constructor(
    public dialogRef: MatDialogRef<EditSneakerPricesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { precios: Price[] }
  ) {
    this.precios = [...data.precios];
  }

  addPrice() {
    this.precios.push({ tienda: '', url: '', precio: 0 });
  }

  removePrice(index: number) {
    this.precios.splice(index, 1);
  }
}
