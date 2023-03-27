import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUser(id: number) {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

  getAlbums(userId: number) {
    return this.http.get(`${this.apiUrl}/albums?userId=${userId}`);
  }

  getUserWithAlbums(userId: number) {
    return forkJoin({
      user: this.getUser(userId),
      albums: this.getAlbums(userId),
    });
  }
}
