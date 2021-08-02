import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Portfolio, StockTicker} from "../model/portfolio";

@Component({
  selector: 'app-portfolio-management',
  templateUrl: './portfolio-management.component.html',
  styleUrls: ['./portfolio-management.component.scss']
})
export class PortfolioManagementComponent implements OnInit {

  endpoint : string = "http://localhost:8080/portfolio";
  portfolios : Portfolio[] = [];

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  ngOnInit(): void {

    this.getPortfolios().subscribe( (res: Portfolio[]) => {
      this.portfolios = res;
    })
  }

  getPortfolios(): Observable<Portfolio[]> {
    return this.httpClient.get<Portfolio[]>(this.endpoint + '/all');
  }

  deletePortfolio(id: string) {
    this.httpClient.delete(this.endpoint + id).subscribe();
  }

  openTickerDialog(ticker: StockTicker) {}

}
