import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { DataSharingService } from "../data-sharing.service";
import { Router } from "@angular/router";
import * as messages from "../../../assets/i18n/messages.json";

@Component({
  selector: 'app-privacyactpage',
  imports: [CommonModule],
  templateUrl: './privacyactpage.component.html',
  styleUrl: './privacyactpage.component.css'
})

export class PrivacyactpageComponent implements OnInit {

  label_SelectYourLanguage!: string; // label on the screen
  label_btnSelectLanguage!: string; // label on the screen

  lngSelected!: string; // used by CSS to hide/show Submit button

  lngEnglishSelected = false;
  lngFrenchSelected = false;
  lngSpanishSelected = false;
  
  msgId: string = '';
  msg_privacy_h2: string = '';
  msg_privacy_h3: string = '';
  msg_privacy_para01: string = '';

  label_Next!: string; // label on the screen
  label_btnNext!: string; // label on the screen
  nextSelected!: string; // used by CSS to hide/show Submit button

  constructor(
    private router: Router,
    private dataSharingService: DataSharingService) {
    //
  }
  getTargetLngFromSvc() {
    var result = '';
    this.dataSharingService.targetLanguage.subscribe(
      (value: string) => {
        console.log("LanguageSelectComponent: Data-Sharing-Svc returned target language: ", value);
        result = value;
      }
    );
    return result;
  }
  ngOnInit(): void {
    this.dataSharingService.targetLanguage.subscribe(this.onLanguageChangeRenderMessages);
    this.onLanguageChangeRenderMessages(this.lngSelected);
    
    this.lngSelected = this.getTargetLngFromSvc();
    console.log("PrivacyActComponent: ngOnInit: selected language: " + this.lngSelected + "/"); 
    var lng = this.getTargetLngFromSvc();
    this.msgId = "msg_privacy_h2_" + lng;
    //console.log("PrivacyactpageComponent: ngOnInit: msgId: " + this.msgId +" lngSelected: " + lng);
    this.msg_privacy_h2 = messages[this.msgId as keyof typeof messages];
    this.msgId = "msg_privacy_h3_" + lng;
    this.msg_privacy_h3 = messages[this.msgId as keyof typeof messages];
    this.msgId = "msg_privacy_para01_" + lng;
    console.log("PrivacyactpageComponent: ngOnInit: msgId: " + this.msgId +" lngSelected: " + lng);
    this.msg_privacy_para01 = messages[this.msgId as keyof typeof messages];
    this.msgId = "msg_btn_next_" + lng;
    this.label_btnNext = messages[this.msgId as keyof typeof messages];
  }

  lngDeselectAll() {
    this.lngEnglishSelected = false;
    this.lngFrenchSelected = false;
    this.lngSpanishSelected = false;
  }

  onLanguageChangeRenderMessages = (lng: string) => {
    var lng = this.getTargetLngFromSvc();
    this.msgId = "msg_privacy_h2_" + lng;
    this.msg_privacy_h2 = messages[this.msgId as keyof typeof messages];
    this.msgId = "msg_privacy_h3_" + lng; // msg_welcome_en_h3, msg_welcome_fr_h3, msg_welcome_es_h3
    this.msg_privacy_h3 = messages[this.msgId as keyof typeof messages];
    this.msgId = "msg_privacy_para01_" + lng;
    this.msg_privacy_para01 = messages[this.msgId as keyof typeof messages];
    console.log("PrivacyactpageComponent: onLanguageChangeRenderMessages: msg_privacy_para01: " + this.msg_privacy_para01 );

  };
//<input type="submit" value="{{label_btnSelectLanguage}}" (click)="onSubmit()" [className]="lngSelected ? 'divVisible':'divHidden'" />
// getTargetLngFromSvc(): string {
//   return this.lngSelected;
// }

onSubmit() {
  var lng = this.getTargetLngFromSvc();
  console.log("LanguageSelectComponent: onSubmit: selected language: " + lng + "/"); // + udi);

  // no matter whether we have UDI or don't, go to Udi Lookup page
  // var url = "lookup-udi/";
  var url = "ageverification/" + lng;
  console.log("LanguageSelectComponent: navigate to: " + url);
  this.router.navigate([url]);
}
}
