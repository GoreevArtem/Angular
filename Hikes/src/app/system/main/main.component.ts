import { Component, OnInit } from '@angular/core';
import {RecordService} from '../shared/services/record.service';
import {RecordModel} from '../shared/models/record.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isCollapsed = true;
  records: RecordModel[] = [];
  isLoaded = false;

  searchValue = '';
  searchPlaceholder = 'Название';
  searchField = 'name';

  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
    this.recordService.getRecord()
      .subscribe((record: RecordModel[]) => {
        this.records = record;
        this.isLoaded = true;
      });
  }
  // tslint:disable-next-line:typedef
  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  changeCriteria(field: string){
      const namesMap = {
        name: 'Название',
        date: 'Дата',
        id: 'Номер',
        userName: 'Имя пользователя'
      };
      this.searchPlaceholder = namesMap[field];
      this.searchField = field;
  }
}
