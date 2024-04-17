import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  constructor(private http:HttpClient){}
  // studentObj: Student = new Student();

  contactDetailsObject:any={
    "name":"",
    "email":"",
    "subject":"",
    "message":"",
  }
  getContact(){
    debugger;
    this.http.post("http://localhost:3000/locations", this.contactDetailsObject).subscribe((res:any)=>{
     alert("data saved succefully") 
    //  "name":"",
    this.contactDetailsObject.name="";
    this.contactDetailsObject.email="";
    this.contactDetailsObject.subject="";
    this.contactDetailsObject.message="";
    // "email":"",
    // "subject":"",
    // "message":""
    })
  }

  ngOnInit(): void {
    // this.getContact();
    // throw new Error('Method not implemented.');
  }

}
function res(value: Object): void {
  throw new Error('Function not implemented.');
}

