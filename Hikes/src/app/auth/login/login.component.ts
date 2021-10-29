import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {Message} from '../../shared/models/message.model';
import {AuthService} from '../../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: Message;
  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
    this.message = new Message('danger', '');
    this.route.queryParams.subscribe((params: Params) => {
      if (params[`nowCanLogin`]){
        this.showMessage({
          text: 'Теперь вы можете войти в систему',
          type: 'success'
        });
      }
    });
  }

  // tslint:disable-next-line:typedef
  private showMessage(message: Message){
    this.message = message;
    window.setTimeout(
      () => {
        this.message.text = '';
      }, 5000);
  }

  onSubmit(): void {
    const formData = this.form.value;
    this.userService.getUsers(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password && user.email === formData.email) {
          this.message.text = '';
          window.localStorage.setItem('user', JSON.stringify(user));
          this.authService.login();

          this.router.navigate(['/system', 'main']);
          } else {
            this.showMessage({text: 'Пароль неверный', type: 'danger'});
          }
        } else {
          this.showMessage({text: 'Такого пользователя нет', type: 'danger'});
        }
      });
  }
}
