import { Component, OnInit } from '@angular/core';
import {RecordService} from '../shared/services/record.service';
import {RecordModel} from '../shared/models/record.model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  records: RecordModel[] = [];
  isLoaded = false;

  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
    this.recordService.getRecord()
      .subscribe((records: RecordModel[]) => {
        this.records = records;
        this.isLoaded = true;
      });
  }

  // tslint:disable-next-line:typedef
  newRecordAdd(record: RecordModel){
    this.records.push(record);
  }
  // tslint:disable-next-line:typedef
  recordEdit(record: RecordModel){
    const ID = this.records.findIndex(userId => userId.id === record.id);
    this.records[ID] = record;
  }

}
