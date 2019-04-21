import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'sticker';

  currentDate: Date;

  ngOnInit() {
    setInterval( () => { 
      this.currentDate = new Date(); 
    }, 1000);
  }
}
