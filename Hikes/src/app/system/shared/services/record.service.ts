import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecordModel} from '../models/record.model';
import {Observable} from 'rxjs';

@Injectable()
export class RecordService{
  constructor(
    private http: HttpClient
  ) {
  }
  // tslint:disable-next-line:typedef
  createRecord(record: RecordModel){
    return this.http.post('http://localhost:3000/record', record);
  }
  /*RecordModel[]*/
  getRecord(): Observable <any> {
    return this.http.get(`http://localhost:3000/record`);
  }
  // tslint:disable-next-line:typedef
  updateRecord(data: RecordModel){
    return this.http.put(`http://localhost:3000/record/${data.id}`, data);
  }
  // tslint:disable-next-line:typedef
  deleteRecord(record: RecordModel){
    return this.http.delete(`http://localhost:3000/record/${record.id}`);
  }
}
