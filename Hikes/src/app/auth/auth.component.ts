import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit{
  constructor(private  router: Router) {}
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.router.navigate((['/login']));
  }
}
