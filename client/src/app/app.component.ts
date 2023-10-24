import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from './models/product';
import { Pagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CNNET';
  products: Products[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<Pagination<Products[]>>('http://localhost:5001/api/product?pageSize=50').subscribe({
      next: response => this.products = response.data, // what to do next
      error: (error) => console.log(error), //what to do if there is an error
      complete: () => {
        console.log('request completed');
        console.log('extra statement');
      },
    });
  }
}
