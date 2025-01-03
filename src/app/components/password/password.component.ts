import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogClose } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatDialogClose,
    MatInput
  ],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent {
  password: string = '';
}
