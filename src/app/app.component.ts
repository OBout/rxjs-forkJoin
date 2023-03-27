import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: any;
  albums: any = [];

  constructor(private dataService: DataService) {
    this.dataService.getUserWithAlbums(1).subscribe(({ user, albums }) => {
      this.user = user;
      this.albums = albums;
    });
  }
}
