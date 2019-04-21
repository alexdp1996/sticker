import { Component, OnInit, Input } from '@angular/core';
import { Sticker } from '../sticker';
import { StickerService } from '../sticker.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {

  stickers$: Observable<Sticker[]>;
  private searchTerms = new Subject<string>();

  constructor(private stickerService: StickerService) { }

  @Input() term: string;

  search(): void {
    this.searchTerms.next(this.term);
  }

  ngOnInit() {
    this.stickers$ = this.searchTerms.pipe(
      debounceTime(300),
      switchMap((term: string) => this.stickerService.searchStickers(term)),
    );
    setTimeout(()=>this.searchTerms.next(""),300);
  }

  delete(id: number): void {
    if (!confirm("Are you sure?"))
      return;
    setTimeout(()=>this.searchTerms.next(this.term),300);
    this.stickerService.deleteSticker(id).subscribe();
  }

}
