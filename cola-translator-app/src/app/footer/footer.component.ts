import { Component } from "@angular/core";
import { DataSharingService } from "../data-sharing.service";
import * as messages from "../../../assets/i18n/messages.json";

@Component({
  selector: "app-footer",
  imports: [],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css"
})
export class FooterComponent {

  msg_footer: string = "";

  constructor(private dataSharingService: DataSharingService) { }

  onLanguageChangeRenderMessages = (lng: string) => {
    const msgId = "msg_footer_" + lng;
    this.msg_footer = messages[msgId as keyof typeof messages];
  };

  ngOnInit() {
    // subscribe to language changes
    this.dataSharingService.targetLanguage.subscribe(this.onLanguageChangeRenderMessages);
  }
}
