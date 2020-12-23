import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,
              private toastr:ToastrService,
              private router:Router

    ) { }

  ngOnInit(): void {
  }

  processForm(form:NgForm){
    console.log(form)
  }
  login(loginForm:NgForm){
    this.auth.login(loginForm.value).subscribe(
      (response)=>{
        this.toastr.success("Bienvenue")
        localStorage.setItem('token',response.id)
        this.router.navigate(['cv'])
      },
      (error)=>{
        this.toastr.error("Veuillez vérifier vos credentials")
      }
    )
  }
}
