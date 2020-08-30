import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  projectName:string;
  constructor () {
  this.projectName = "LaGomba";
}

  ngOnInit(): void {
  }

}