import { Component, OnInit } from '@angular/core';
import { Sticker } from '../sticker';
import { StickerService } from '../sticker.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {

  stickers: Sticker[];

  ngOnInit() {
    this.getStickers();
  }

  constructor(private stickerService: StickerService) { }

  getStickers(): void {
    this.stickerService.getStickers()
      .subscribe(stickers => this.stickers = stickers);
  }

  delete(id: number): void {
    if (!confirm("Are you sure?"))
      return;
    this.stickers = this.stickers.filter(h => h.id !== id);
    this.stickerService.deleteSticker(id).subscribe();
  }

}
