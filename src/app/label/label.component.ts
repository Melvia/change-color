import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.css'
})
export class LabelComponent implements OnInit, OnDestroy {
  labelClass = 'red';
  myInterval: any;

  ngOnInit() {
    this.myInterval = setInterval(() => {
      this.labelClass = this.labelClass === 'red' ? 'green' : 'red'
    }, 5000);
  }

 ngOnDestroy() {
   clearInterval(this.myInterval);
 }
}
