import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proxy';
  private url = 'http://localhost:4200/api/ddd';
  //private url = 'https://api.publicapis.org/entries';
  //private url = 'https://www.boredapi.com/api/activity';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.get();
  }

  private get(): void {
    this.http.get(this.url).subscribe(x => {
      console.log(JSON.stringify(x));

    });

  }
}


