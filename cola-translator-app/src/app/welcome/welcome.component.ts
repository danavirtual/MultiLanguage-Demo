import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { DataSharingService } from "../data-sharing.service";
import { LanguageSelectComponent } from "../language-select/language-select.component";
import { Router } from "@angular/router";
import * as messages from "../../../assets/i18n/messages.json";

@Component({
  selector: "app-welcome",
  standalone: true,
  imports: [CommonModule, LanguageSelectComponent],
  templateUrl: "./welcome.component.html",
  styleUrl: "./welcome.component.css"
})
export class WelcomeComponent {
  @Input() udi!: string; // if UDI is present in URL, this var is set from URL
  msg_welcome: string = "";

  constructor(
    private router: Router,
    private dataSharingService: DataSharingService) {
    //
  }

  onLanguageChangeRenderMessages = (lng: string) => {
    const msgId = "msg_welcome_" + lng;
    this.msg_welcome = messages[msgId as keyof typeof messages];
  };

  ngOnInit() {
    // store UDI requested in URL
    console.log("WelcomeComponent on init udi: " +  this.udi);
    this.dataSharingService.setTargetUdi(this.udi);
    // set default language
    this.dataSharingService.setTargetLanguage("en");
    // subscribe to language changes
    this.dataSharingService.targetLanguage.subscribe(this.onLanguageChangeRenderMessages);
  }

  // there are no controls, this always displayed along with app-langualge-select,  which has a submit button
}
