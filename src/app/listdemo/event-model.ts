export class EventModel {
  id: number;
  name: string;
  pic: string;

  constructor(name, id = 0, pic= '') {
    this.id = id;
    this.name = name;
    this.pic = pic;
  }
}
