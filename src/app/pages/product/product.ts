import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class Products implements OnInit {

  products: any[] = [];

  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.error = '';

    this.http.get<any[]>('http://localhost:3000/products').subscribe({
      next: (data) => {
        this.loading = false;
        this.products = data;
      },
      error: () => {
        this.loading = false;
        this.error = 'Không thể tải dữ liệu';
      }
    });
  }

  deleteProduct(id: number) {
    const confirmDelete = confirm('Bạn có chắc muốn xóa không?');
    if (!confirmDelete) return;

    this.http.delete(`http://localhost:3000/products/${id}`).subscribe({
      next: () => {
        this.products = this.products.filter(p => p.id !== id);
        alert('Xóa thành công');
      },
      error: () => {
        alert('Xóa thất bại');
      }
    });
  }

}