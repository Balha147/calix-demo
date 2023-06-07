import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CalixInputComponent, CalixShowFormErrorsComponent, CalixTooltipDirective, CalixTooltipEnum } from 'calix-lib';
import { JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    JsonPipe, // juste pour afficher la valeur de notre formulaire `form`
    CalixInputComponent,
    ReactiveFormsModule,
    CalixShowFormErrorsComponent,
    CalixTooltipDirective,
  ],
  standalone: true
})
export class AppComponent {
  form: FormGroup = new FormGroup({
    // validateur Validators.minLength(13) pour tester le composant des app-show-errors-form
    name: new FormControl('', [Validators.required, Validators.minLength(13)])
  });

  customErrors = {
    required: () => 'Veuillez remplir ce champ',
    minlength: (param: any) => `Veuillez entrer au moins ${param.requiredLength} caractères`,
  };

  /**
   * afficher dans la console la valeur de l'output de `CalixInput`
   */
  getOutputOfCalixInput(value: string): void {
    console.log('value', value);
  }

  tooltipPosition = CalixTooltipEnum;
}
