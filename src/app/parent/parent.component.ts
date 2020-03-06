import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public name="from parent component"
  childData:string;

  constructor() { }

  ngOnInit() {
  }

  parentMethod(event){
    this.childData=event;
  }

}
