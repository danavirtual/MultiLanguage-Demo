import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PdfDocument } from "./pdf-document";

@Injectable({
  providedIn: "root"
})
export class DataSharingService {

  // srcDoc: PdfDoc Observable // this is an actual SRC PDF
  private srcDocSubject = new BehaviorSubject<any>(null);
  public srcDoc = this.srcDocSubject.asObservable();
  setSrcDoc(srcDoc: PdfDocument) {
    console.log("Data-Sharing-Svc stored doc: ", srcDoc);
    this.srcDocSubject.next(srcDoc);
  }

  // targetLanguage: string Observable // what user has requested
  private targetLanguageSubject = new BehaviorSubject<any>(null);
  public targetLanguage = this.targetLanguageSubject.asObservable();
  setTargetLanguage(s: string) {
    console.log("Data-Sharing-Svc stored language: ", s);
    this.targetLanguageSubject.next(s);
  }

  // targetUdi: string Observable // what user has requested
  private targetUdiSubject = new BehaviorSubject<any>(null);
  public targetUdi = this.targetUdiSubject.asObservable();
  setTargetUdi(s: string) {
    console.log("Data-Sharing-Svc stored UDI: ", s);
    this.targetUdiSubject.next(s);
  }

}
