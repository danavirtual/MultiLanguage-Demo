import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { BrowserModule } from "@angular/platform-browser";
import { Component, Input, OnInit } from "@angular/core";
import { DataSharingService } from "../data-sharing.service";
import { Router } from "@angular/router";
import messages from "../../../assets/i18n/messages.json";

interface Messages {
  [key: string]: string;
}
const typedMessages: Messages = messages;

@Component({
  selector: 'app-helppage',
  imports: [],
  templateUrl: './helppage.component.html',
  styleUrl: './helppage.component.css'
})
export class HelppageComponent implements OnInit {
  
  msgId: string = '';

  lngSelected!: string; // used by CSS to hide/show Submit button
  label_HelpLine!: string; // label on the screen

  lngEnglishSelected = false;
  lngFrenchSelected = false;
  lngSpanishSelected = false;

  msg_help: string = '';
  

  
  getTargetLngFromSvc() {
    var result = '';
    this.dataSharingService.targetLanguage.subscribe(
      (value: string) => {
        console.log("HelppageComponent: Data-Sharing-Svc returned target language: ", value);
        result = value;
      }
    );
    return result;
  }
  
  onLanguageChangeRenderMessages = (lng: string) => {
    var lng = this.getTargetLngFromSvc();
    this.msgId = "msg_footer_" + lng;
    this.msg_help = typedMessages[this.msgId]; 
  };

  
  constructor(
    private router: Router,
    private dataSharingService: DataSharingService) {
    //
  }


   ngOnInit(): void {
    var lng = this.getTargetLngFromSvc();
    this.msgId = "msg_footer_" + lng;
    this.msg_help = typedMessages[this.msgId]; 

  }
}
