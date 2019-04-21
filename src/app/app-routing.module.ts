import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AddStickerComponent } from './add-sticker/add-sticker.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { StickersComponent }      from './stickers/stickers.component';
import { StickerDetailComponent }  from './sticker-detail/sticker-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: StickerDetailComponent },
  { path: 'stickers', component: StickersComponent },
  { path: 'addSticker', component: AddStickerComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
