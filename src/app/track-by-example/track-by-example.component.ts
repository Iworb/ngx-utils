import { Component } from '@angular/core';
import { trackBy } from '@iworb/ngx-utils';

class TrackByExampleItem {
  id: number;
  rand: number;

  constructor(payload: { id?: number, rand?: number }) {
    this.id = payload?.id ?? 0;
    this.rand = payload?.rand ?? Math.ceil(Math.random() * 1000);
  }

}

@Component({
  selector: 'app-track-by-example',
  templateUrl: './track-by-example.component.html',
  styleUrls: ['./track-by-example.component.scss']
})
export class TrackByExampleComponent {

  items: TrackByExampleItem[];
  timestamp: string;
  trackById = trackBy('id');

  constructor() {
    this.generateItems();
  }

  generateItems(): void {
    this.items = Array.from({ length: 10 }, (v, id) => new TrackByExampleItem({ id }));
    this.timestamp = this.getTimestamp();
  }

  getTimestamp(): string {
    return new Date().getUTCMilliseconds().toString();
  }
}
