import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalixTooltipEnum } from 'calix-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup = new FormGroup({
    // validateur Validators.minLength(13) pour tester le composant des app-show-errors-form
    name: new FormControl('', [Validators.required, Validators.minLength(13)])
  });

  calixValue: string ='calix-';

  customErrors = {
    required: () => 'Veuillez remplir ce champ',
    minlength: (param: any) => `Veuillez entrer au moins ${param.requiredLength} caractères`,
  };

  onConcatCalixInputValue(value: string): void {
    this.calixValue = `calix-${value}`;
  }

  tooltipPosition = CalixTooltipEnum;
}
