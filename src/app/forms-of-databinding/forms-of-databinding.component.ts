import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-of-databinding',
  templateUrl: './forms-of-databinding.component.html',
  styleUrls: ['./forms-of-databinding.component.css']
})
export class FormsOfDatabindingComponent implements OnInit {
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

  constructor() { }

  ngOnInit() {
  }
}
