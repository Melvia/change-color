import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.css'
})
export class LabelComponent implements OnInit {
  labelClass = 'red';


  ngOnInit() {
    setInterval(() => {
      this.labelClass = this.labelClass === 'red' ? 'green' : 'red'
    }, 5000);
  }

}
