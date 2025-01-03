import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { PasswordComponent } from './components/password/password.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private dialog: MatDialog) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      const dialogRef = this.dialog.open(PasswordComponent, {
        width: '400px',
        disableClose: true,
      });

      dialogRef.afterClosed().subscribe((password) => {
        if (password === 'AdminCrud') {
          resolve(true);
          return;
        } 
        this.router.navigate(['/']);
        resolve(false);
      });
    });
  }
}
