import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {
      title: 'Dragon Ball',
      year: 1984,
      genre: 'Action',
      image: 'https://upload.wikimedia.org/wikipedia/vi/4/4f/Dragon_Ball_Super_artwork.jpg',
      views: 100000,
    },
    {
      title: 'Attack On Titan',
      year: 2009,
      genre: 'Dark Fantasy',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZLQGN5inUbUYyz9Oj6smYPij-2bhDy8taA&s',
      views: 95000,
    },
    {
      title: 'Bleach',
      year: 2001,
      genre: 'Supernatural',
      image: 'https://upload.wikimedia.org/wikipedia/vi/5/53/Bleach_cover_01.jpg',
      views: 80000,
    },
  ];
}