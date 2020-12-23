import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthService,
              private router:Router,
              private toaster:ToastrService) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout()
    this.router.navigate(['login'])
    this.toaster.info('Bye !')
  }

}
