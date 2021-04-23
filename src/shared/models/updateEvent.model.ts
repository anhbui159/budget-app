import { Item } from './item.model';

export interface UpdateEvent {
  old: Item;
  new: Item;
}
