import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecordModel} from '../../shared/models/record.model';
import {Form, NgForm} from '@angular/forms';
import {RecordService} from '../../shared/services/record.service';
import {Message} from '../../../shared/models/message.model';
import {User} from '../../../shared/models/user.model';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {

  currentRecordId = 1;
  currentRecord: RecordModel;
  massage: Message;
  userName: User;

  @Input() records: RecordModel[] = [];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRecordEdit = new EventEmitter<RecordModel>();

  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
    this.onRecordChange();
    this.massage = new Message('success', '');
    this.userName = JSON.parse(window.localStorage.getItem('user'));
}
  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm) {
    const {name, date, description} = form.value;
    const record = new RecordModel(name, date, description, this.userName.name, +this.currentRecordId);
    this.recordService.updateRecord(record)
      .subscribe((data: RecordModel) => {
        this.onRecordEdit.emit(data);
        this.massage.text = 'Пост изменен';
        window.setTimeout(() => this.massage.text = '', 5000);
      });
    form.reset();
  }
  // tslint:disable-next-line:typedef
  onRecordChange(){
    this.currentRecord = this.records.find(msgUser => msgUser.id === +this.currentRecordId);
  }
  // tslint:disable-next-line:typedef
  delRecord(form: NgForm){
    const {name, date, description, userName} = form.value;
    const record = new RecordModel(name, date, description, userName, +this.currentRecordId);
    this.recordService.deleteRecord(record)
      .subscribe(() => {
        this.massage.text = 'Приглашение удаленно!';
      });
    form.reset();
  }
}
