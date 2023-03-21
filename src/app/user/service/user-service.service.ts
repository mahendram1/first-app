import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Employee } from '../model/employee.model';
import { Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient:HttpClient) {
   }
   public addEmployee(emp:Employee) : Observable<Employee>{
    return this.httpClient.post<Employee>("api/employee",emp);
   }
   public getEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>("api/employees");
   }
   public delete(id:number): Observable<Employee>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return this.httpClient.delete<Employee>("api/employee",{params:queryParams })
   }
}
