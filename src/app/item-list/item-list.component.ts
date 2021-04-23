import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Item } from 'src/shared/models/item.model';
import { UpdateEvent } from 'src/shared/models/updateEvent.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() items: Item[];
  @Output() delete: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onDeleteButtonClicked(item: Item) {
    this.delete.emit(item);
  }

  onCardClicked(item: Item) {
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      console.log(result[0]);
      console.log(result[1]);
      if (result) {
        this.update.emit({
          old: result[0],
          new: result[1],
        });
      }
    });
  }
}
