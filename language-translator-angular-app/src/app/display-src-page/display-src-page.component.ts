import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { DataSharingService } from "../data-sharing.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { PdfDocument } from "../pdf-document";
import * as messages from "../../../assets/i18n/messages.json";

@Component({
  selector: "app-display-src-page",
  imports: [CommonModule],
  templateUrl: "./display-src-page.component.html",
  styleUrl: "./display-src-page.component.css"
})
export class DisplaySrcPageComponent implements OnInit {

  iframeUrl!: SafeUrl;
  label_docSrc!: string; // label at screen
  srcDoc!: PdfDocument;
  srcdata!: string; // base64 data of the PDF document
  
  
  constructor(
    private dataSharingService: DataSharingService,
    private sanitizer: DomSanitizer
  ) {
    //
  }

  onLanguageChangeRenderMessages = (lng: string) => {
    const msgId = "msg_doc_src_" + lng;
    this.label_docSrc = messages[msgId as keyof typeof messages];
  }

  onSrcDocChangeRenderIt = (d: PdfDocument) => {
    // retrieve src PDF
    this.srcDoc = d;    
    this.srcdata = atob(this.srcDoc.base64Data);
    console.info("Displaying SRC base64Data (atob):",this.srcdata);
    console.info("SRC pdfDoc: name : ", this.srcDoc.name," id: ",  this.srcDoc.id, " length :" , this.srcDoc.base64Data.length);
    // draw iframe
    const pdfData = "data:application/pdf;base64," 
    + this.srcdata
    //+ this.srcDoc.base64Data 
    + "#toolbar=0&navpanes=0";
    console.log("!!!SRC pdfData: ", pdfData);
    // https://stackoverflow.com/questions/36714203/
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfData);
  }

  ngOnInit() {
    // subscribe to language changes
    this.dataSharingService.targetLanguage.subscribe(this.onLanguageChangeRenderMessages);
    // subscribe to SRC document changes
    this.dataSharingService.srcDoc.subscribe(this.onSrcDocChangeRenderIt);
  }

}
