import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor() { }
  n: number = 0;
  
  aumenta() {
    this.n++
  }

  diminui() {
    if (this.n != 0)
    this.n--
  }

  resetar() {
    this.n = 0;
  }



}
