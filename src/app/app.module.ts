import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StickersComponent } from './stickers/stickers.component';
import { StickerDetailComponent } from './sticker-detail/sticker-detail.component';
import { AddStickerComponent } from './add-sticker/add-sticker.component';
import { StickerSearchComponent } from './sticker-search/sticker-search.component';

@NgModule({
  declarations: [
    AppComponent,
    StickersComponent,
    StickerDetailComponent,
    DashboardComponent,
    AddStickerComponent,
    StickerSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
