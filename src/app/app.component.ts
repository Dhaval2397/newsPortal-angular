import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'newsPortal';
  searchText: any;
  constructor(private router: Router, private formBuilder: FormBuilder, private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  // navigate(data: any) {
  //   localStorage.setItem('title', data);
  //   this.router.navigate(['/category', data.toLowerCase().replace(/\s+/g, '-')]);

  //   window.scroll({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   });
  // }
  // aboutus() {
  //   this.router.navigate(['about'])
  //   window.scroll({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   });
  // }
  // contactus() {
  //   this.router.navigate(['contact'])
  //   window.scroll({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   });
  // }
  loginform: boolean = true
  userlogin: boolean = true;
  adminlogin: boolean = false
  loginasadmin: boolean = false;
  loginasuser: boolean = false;
  userregistration: boolean = false
  loginForm: FormGroup;
  userloginForm!: FormGroup;
  userregistrationform!: FormGroup
  hasError(controlName: string, errorName: string) {
    const control = this.loginForm.get(controlName);
    const usercontrol = this.userloginForm.get(controlName)
    const signcontrol = this.userregistrationform.get(controlName)
    return control?.hasError(errorName) && control?.touched, usercontrol?.hasError(errorName) && usercontrol?.touched,signcontrol?.hasError(errorName) && signcontrol?.touched;
  }
  email: string = "dv2397@gmail.com";
  password: string = "Dv@239764"
  submitForm(mail: string, pass: string) {
    if (this.loginForm.valid) {
      if (this.email == mail && this.password == pass) {
        this.loginasadmin = true;
        this.loginform = false
      }
      else {
        alert("Password & Email does not match")
      }
    }
  }
  ngOnInit(): void {
    this.userloginForm = this.fb.group({
      useremail: ['', [Validators.required, Validators.email]],
      userpassword: ['', Validators.required]
    });
    this.userregistrationform = new FormGroup({
      "regname": new FormControl(),
      "regemail": new FormControl(),
      "regpassword": new FormControl(),
    })
  }
  useremail: string = "user2397@gmail.com"
  userpass: string = "User@239764"
  onSubmit(usermail: string, userpassword: string) {
    // this.http.get<any>("http://localhost:3000/signupData")
    //   .subscribe(res => {
    //     if (res.regemail == usermail && res.regpassword == userpassword) {
    //       this.loginasuser = true;
    //       this.loginform = false
    //     }
    //     else {
    //       alert("Password & Email does not match")
    //     }

    //   })
    this.http.get<any[]>("http://localhost:3000/signupData").subscribe(users => {
      const foundUser = users.find(user => user.regemail === usermail && user.regpassword === userpassword);
      if (foundUser) {
        this.loginasuser = true;
        this.loginform = false;
        // alert(foundUser.)
      } else {
        alert("Password & Email do not match");
      }
    });
  }

  showregistrationForm() {
    this.userregistration = true
    this.loginform = false
  }
  signupuser: any
  onSubmitregister(userregistrationform: FormGroup) {
    this.http.post("http://localhost:3000/signupData", this.userregistrationform.value)
      .subscribe(res => {
        alert("Sign Up Succefully");
        this.userregistrationform.reset();
        this.userregistration = false
        this.loginform = true;
      }, err => {
        alert("Somethig Went Wrong")
      }
      )
  }
}
