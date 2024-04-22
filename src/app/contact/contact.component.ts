import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from '../api-services.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  contactDataArray: any;
  constructor(private http: HttpClient, private contact_data: ApiServicesService, private formBuilder: FormBuilder) {
    contact_data.getcontactdata().subscribe((data: any) => {
      this.contactDataArray = data;
      // this.contactDataArray = this.contactDataArray;
      console.log(this.contactDataArray)
    });
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  hasError(controlName: string, errorName: string) {
    const control = this.contactForm.get(controlName);
    return control?.hasError(errorName) && control?.touched;
  }
  contactDetailsObject: any = {
    // "id": 1,
    "name": "",
    "email": "",
    "subject": "",
    "message": "",
  }
  display = "d-none"
  getContact() {
    debugger;
    if (this.contactForm.valid) {
      this.http.post("http://localhost:3000/contactdetails", this.contactDetailsObject).subscribe((res: any) => {
        this.contactDetailsObject.name = ""
        this.contactDetailsObject.email = "";
        this.contactDetailsObject.subject = "";
        this.contactDetailsObject.message = "";
        this.display = "d-block";
        setTimeout(() => {
          this.display = "d-none"
        }, 5000);
      })
    }
  }
  ngOnInit(): void {
  }
  
}

