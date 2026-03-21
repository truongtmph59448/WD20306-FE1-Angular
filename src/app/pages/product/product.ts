import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html'
})
export class Products implements OnInit {

  products: any[] = [];

  loading = true;
  error = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.http.get<any>('http://localhost:3000/products')
      .subscribe({
        next: (data) => {
          this.products = data;
          this.loading = false;
        },
        error: () => {
          this.error = true;
          this.loading = false;
        }
      });

  }

}