import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { DataSharingService } from "../data-sharing.service";
import { LanguageSelectComponent } from "../language-select/language-select.component";
import { Router } from "@angular/router";
import * as messages from "../../../assets/i18n/messages.json";

@Component({
  selector: "app-welcome",
  imports: [CommonModule, LanguageSelectComponent],
  templateUrl: "./welcome.component.html",
  styleUrl: "./welcome.component.css"
})
export class WelcomeComponent {
  @Input() udi!: string; // if UDI is present in URL, this var is set from URL
  msg_welcome: string = "";
  msg_welcome_h2: string = "";
  msg_welcome_h3: string = "";
  msg_welcome_para01: string = "";
  msg_welcome_para02: string = "";
  
  msg_li1: string = "";
  msg_li2: string = "";

  msgId: string = "";
  constructor(
    private router: Router,
    private dataSharingService: DataSharingService) {
    //
  }

  onLanguageChangeRenderMessages = (lng: string) => {
    this.msgId = "msg_welcome_h2_" + lng; // msg_welcome_en_h2, msg_welcome_fr_h2, msg_welcome_es_h2
    this.msg_welcome_h2 = messages[this.msgId as keyof typeof messages];
    this.msgId = "msg_welcome_h3_" + lng; // msg_welcome_en_h3, msg_welcome_fr_h3, msg_welcome_es_h3
    this.msg_welcome_h3 = messages[this.msgId as keyof typeof messages];
    this.msg_li1 = messages["msg_li1_" + lng as keyof typeof messages];
    this.msg_li2 = messages["msg_li2_" + lng as keyof typeof messages];

    this.msgId = "msg_welcome_para01_" + lng; // msg_welcome_en_para01, msg_welcome_fr_para01, msg_welcome_es_para01
    this.msg_welcome_para01 = messages[this.msgId as keyof typeof messages];

    this.msg_welcome_para02 = messages["msg_welcome_para02_" + lng as keyof typeof messages];
    this.msgId = "msg_welcome_" + lng; // msg_welcome_en, msg_welcome_fr, msg
    this.msg_welcome = messages[this.msgId as keyof typeof messages];
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
