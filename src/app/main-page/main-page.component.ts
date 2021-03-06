import { Component, OnInit } from '@angular/core';
import { Item } from 'src/shared/models/item.model';
import { UpdateEvent } from 'src/shared/models/updateEvent.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  items: Item[] = new Array<Item>();
  total: number = 0;

  constructor() {}

  ngOnInit(): void {}

  addItem(newItem: Item) {
    this.items.push(newItem);
    this.total += newItem.amount;
  }

  deleteItem(item: Item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.total -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent) {
    this.items[this.items.indexOf(updateEvent.old)] = updateEvent.new;
    console.log(updateEvent);

    this.total -= updateEvent.old.amount;
    this.total += updateEvent.new.amount;
  }
}
