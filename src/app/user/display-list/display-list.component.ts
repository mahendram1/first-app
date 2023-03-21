import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Employee } from '../model/employee.model';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  public empList: Employee[] = [];
  public message: string = "";
  
  constructor(private userServiceService: UserServiceService, private router: Router) {

   }

  ngOnInit(): void {
    this.userServiceService.getEmployees().subscribe(  emps => {
    this.empList = emps;
    });
  }
  public delete(id:number){
    this.userServiceService.delete(id).subscribe( resp => {
      this.message = "Employee with Id = "+ resp.empId +" is deleted successfully.";
      this.empList =this.empList .filter(e=> e.empId !==id);
      });
  }

}

