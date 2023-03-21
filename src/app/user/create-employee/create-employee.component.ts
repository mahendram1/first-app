import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Employee } from '../model/employee.model';
import { UserServiceService } from '../service/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  //@Output()
  //public add = new EventEmitter<String>();
  public emp:Employee;
  public errorMessage: string ="";
  constructor(private userServiceService : UserServiceService,private route: ActivatedRoute, private router: Router) { 
    this.emp = new Employee(1,"","","");
  }

  ngOnInit(): void {
  }
  public cancel(){
    this.emp = new Employee(1,"","","");
    this.router.navigate(['/display']);
    //this.add.emit("cancel");
  }
  public addEmployee(){
    this.errorMessage = '';
    if(this.emp.empId<=0){
      this.errorMessage = "Please enter valid empId.";
      return;
    }
    if(this.emp.name==='' ){
      this.errorMessage = "Please enter valid Name.";
      return;
    }
    if(this.emp.email===''){
      this.errorMessage = "Please enter valid Email.";
      return;
    }
    if(this.emp.address===''){
      this.errorMessage = "Please enter valid Address.";
      return;
    }
    if(this.errorMessage===''){
      this.userServiceService.addEmployee(this.emp).subscribe(res=>{
        //console.log("resp>>:"+JSON.stringify(res));
        this.errorMessage = "Employee added successfully.";
       this.router.navigate(['/display']);
       //this.add.emit("success");
      });
   
    }
  }

}
