import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Angular Static Web Apps - Hello {{message}} from Azure Functions</div>`,
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
