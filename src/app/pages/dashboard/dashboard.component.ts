import { Component, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from 'src/app/app.service';

export interface Books {
  id: string,
  name: string,
  image: string,
  link: string,
  description: {
    author: string,
    publisher: string,
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'image', 'link', 'description'];
  dataSource: MatTableDataSource<Books>;
  public books = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private appService: AppService, private cdr: ChangeDetectorRef) {

    this.appService.getBooks().subscribe(res => {

      this.books = res.data;

      const books = Array.from({length: res.data.length}, (val, index) => this.getBook(res.data[index]));

      this.dataSource = new MatTableDataSource(books);
      this.cdr.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  ngOnInit() {

  }

  // Get List of Books
  getBook(data): Books {
    return {
      id: data?.id,
      name: data.attributes?.content,
      image: data.attributes?.display_properties?.image,
      link: data.links?.self,
      description: {
        author: data.relationships?.authors?.links?.self,
        publisher: data.relationships?.publishers?.links?.self
      }
    }
}

  // Filter Data 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}