import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/models/user.model';
import {UsersService} from '../../shared/services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css']
})
export class RegistrationsComponent implements OnInit {
  form: FormGroup;
  constructor(
    private userService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      name: new FormControl(null, [Validators.required]),
      agree: new FormControl(true, [Validators.requiredTrue])
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    const {email, password, name} = this.form.value;
    const user = new User(email, password, name);

    this.userService.createNewUser(user)
      .subscribe(() => {
    this.router.navigate((['/login']), {
      queryParams: {
        nowCanLogin: true
      }
    });
    });
  }
  forbiddenEmails(constrol: FormControl): Promise<any>{
    return new Promise((resolve, reject) => {
      this.userService.getUsers(constrol.value)
        .subscribe((user: User) => {
          if (user){
            resolve({forbiddenEmails: true});
          }
          else {
            resolve(null);
          }
        });
    });
  }
}
