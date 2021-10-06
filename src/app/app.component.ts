import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadFeature ='recipe';
  onNavigate(href:string){
    this.loadFeature = href;
    console.log(this.loadFeature)
  }
}
