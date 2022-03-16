import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ipAddress = '';
  continent = '';
  country = '';
  country_flag = '';
  country_capital = '';
  country_phone = '';
  country_neighbours = '';
  region = '';
  city = '';
  isp = '';
  timezone = '';
  timezone_name = '';
  currency = '';
  currency_symbol = '';

  constructor(private http:HttpClient) { }
  
  ngOnInit() {
      this.getIPAddress();
  }
  
  getIPAddress()
  {
    this.http.get("https://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;
    });
    this.http.get("https://ipwhois.app/json/"+this.ipAddress).subscribe((res:any)=>{
      this.continent = res.continent;
      this.country = res.country;
      this.country_flag = res.country_flag;
      this.country_capital = res.country_capital;
      this.country_phone = res.country_phone;
      this.country_neighbours = res.country_neighbours;
      this.region = res.region;
      this.city = res.city;
      this.isp = res.isp;
      this.timezone = res.timezone;
      this.timezone_name = res.timezone_name;
      this.currency = res.currency;
      this.currency_symbol = res.currency;
    });
  }
  
}