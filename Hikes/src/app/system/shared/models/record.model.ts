export class RecordModel{
  constructor(
    public name: string,
    public date: string,
    public description: string,
    public userName: string,
    public id?
  ) {}
}
