import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-retour',
  templateUrl: './button-retour.component.html',
  styleUrls: ['./button-retour.component.css']
})
export class ButtonRetourComponent {

  constructor(private location:Location){}
    back():void{
      this.location.back();
    }


}
