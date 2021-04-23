import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/shared/models/item.model';
import { UpdateEvent } from 'src/shared/models/updateEvent.model';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss'],
})
export class EditItemModalComponent implements OnInit {
  data: UpdateEvent = { old: new Item('', 0), new: new Item('', 0) };
  constructor(
    public dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: Item
  ) {
    this.data.old = item;
  }

  ngOnInit(): void {}

  onSubmitted(updatedItem: Item) {
    this.data.new = updatedItem;
    this.dialogRef.close(this.data);
  }
}
