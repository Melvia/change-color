import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {LabelComponent} from "./label/label.component";
import {CustomCheckboxComponent} from "./custom-checkbox/custom-checkbox.component";
import {CustomCheckbox2Component} from "./custom-checkbox2/custom-checkbox2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LabelComponent, CustomCheckboxComponent, CustomCheckbox2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'change-color';
}
