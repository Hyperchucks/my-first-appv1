import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <p>
    WARNING ALERT!!!!! BECAREFUL BACK OUT!!!!
  </p>
  `,
  styles: [`
  p {
    padding: 20px;
    background-color: mistyrose;
    border: 1px solid red;
    
}
    `
  ]
})
export class WarningAlertComponent implements OnInit {

  
}
