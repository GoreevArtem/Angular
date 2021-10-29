import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecordService} from '../../shared/services/record.service';
import {FormGroup, NgForm} from '@angular/forms';
import {RecordModel} from '../../shared/models/record.model';
import {Message} from '../../../shared/models/message.model';
import {User} from '../../../shared/models/user.model';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  massage: Message;
  textName: string;
  textDate: number;
  userName: User;
  textDescription: string;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRecordAdd = new EventEmitter<RecordModel>();

  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
    this.massage = new Message('success', '');
    this.userName = JSON.parse(window.localStorage.getItem('user'));
  }

  // tslint:disable-next-line:typedef
  private showMassage(massage: Message){
    this.massage = massage;
    window.setTimeout(() => {
      this.massage.text = '';
    }, 5000);
  }

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm){
    const {name, date, description} = form.value;
    const record = new RecordModel(name, date, description, this.userName.name);
    this.recordService.createRecord(record)
      .subscribe(() => {
        this.showMassage({
          text: 'Новое приглашение в поход созданно!',
          type: 'success'
        });
        form.reset();
        this.onRecordAdd.emit(record);
      });
  }
}
