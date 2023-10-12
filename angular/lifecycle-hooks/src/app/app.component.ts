import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle-hooks';

  isAliveCheckSample: boolean = true;
  buttonText: string = "Destruir";

  disposeCheckSample(): void {
    this.isAliveCheckSample = !this.isAliveCheckSample ;
    this.buttonText = this.buttonText === "Destruir" ? this.buttonText = "Construir": this.buttonText = "Destruir";
  }
}
