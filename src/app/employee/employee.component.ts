import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb:FormBuilder) { 
    this.userForm=this.fb.group({
      name:['',Validators.required],
      empid:['',Validators.required],
      address:['',Validators.required],
      doj:['',Validators.required],
      salary:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

}
