import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public header:string;
  public name!: string;
 //public isAddEmployee:boolean = false;
  //public isDisplayEmployee: boolean = false;
  constructor(private el: ElementRef){
    this.header ="Constructor";
  
  }
  ngOnInit(): void {
   this.header = "Next Gen Application";
  }
  /*public display(){
    window.alert("display>>:");
    this.isDisplayEmployee = true;
    this.isAddEmployee = false;
  }
  public add(){
    window.alert("add>>:");
    this.isAddEmployee = true;
    this.isDisplayEmployee = false;
  }
  public saveEmployee(event : any){
    window.alert("event>>:"+event);
    this.isDisplayEmployee = true;
    this.isAddEmployee = false;
  }*/

}
