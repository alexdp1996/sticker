import { Component, OnInit } from '@angular/core';
import { Sticker } from '../sticker';
import { StickerService } from '../sticker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  
  stickers: Sticker[];

  ngOnInit() {
    this.getStickers();
  }

  constructor(private stickerService: StickerService) { }

  getStickers(): void {
    this.stickerService.getStickers()
      .subscribe(stickers => this.stickers = stickers);
      
  }
}