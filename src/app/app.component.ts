import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{message}}</div>`,
})
export class AppComponent {
  message = '';

  constructor(private http: HttpClient) {
    this.http.get('/api/message')
      .subscribe((resp: any) => {
        console.log(resp); 
        this.message = resp;
  });
  }
}
