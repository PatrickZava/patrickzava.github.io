import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  constructor(private snackBar: MatSnackBar) {}

  valorA = '';
  valorB = '';
  valorC = '';
  valorCalculado = 'Valor X';
  badgeInvisivel = true;

  copiarParaClipboard() {
    if (this.valorCalculado === 'Valor X') {
      this.badgeInvisivel = true;
      return '';
    }

    this.badgeInvisivel = false;
    return this.valorCalculado;
  }

  aoCopiarClipboard(sucesso: boolean): void {
    if (sucesso) {
      this.snackBar.open('Copiado com sucesso!', 'OK', {
        duration: 3500,
        panelClass: ['success-snackbar'],
      });
    } else {
      this.snackBar.open('Falha ao copiar!', undefined, {
        duration: 3500,
        panelClass: ['error-snackbar'],
      });
    }
  }

  calculaTotal() {
    let valorA = Number(this.valorA);
    let valorB = Number(this.valorB);
    let valorC = Number(this.valorC);

    if (valorA === 0 || valorB === 0 || valorC === 0) {
      this.valorCalculado = 'Valor X';
      this.badgeInvisivel = true;
    }

    if (valorA > 0 && valorB > 0 && valorC > 0) {
      this.valorCalculado = String(
        ((valorB * valorC) / valorA).toFixed(2)
      ).replace('.', ',');
    }
  }
}
