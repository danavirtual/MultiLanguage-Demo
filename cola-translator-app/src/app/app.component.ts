import { Component } from "@angular/core";
import { DataSharingService } from "./data-sharing.service";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})

export class AppComponent {
  title = "language-translator-angular-app";

  constructor(private dataSharingService: DataSharingService) { }

  onLngSubmit($event: MouseEvent) {
    var randomBoolean = Math.random();
    if (randomBoolean < 0.33) {
      this.dataSharingService.setTargetLanguage("fr");
      return;
    }
    if (randomBoolean < 0.66) {
      this.dataSharingService.setTargetLanguage("es");
      return;
    }
    this.dataSharingService.setTargetLanguage("en");
  }

}
