import { Component, OnInit } from '@angular/core';
import {StickerService } from '../sticker.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Sticker } from '../sticker';

@Component({
  selector: 'app-add-sticker',
  templateUrl: './add-sticker.component.html',
  styleUrls: ['./add-sticker.component.css']
})

export class AddStickerComponent implements OnInit {

  constructor(
    private stickerService : StickerService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
  }

  add(name: string): string {
    name = name.trim();
    if (name) {
      this.stickerService.addSticker( { name } as Sticker)
        .subscribe(); 
        alert('Sticker was added!');
    }
    else
    alert("Sticker wasn't added!");
      return '';
    }
}
