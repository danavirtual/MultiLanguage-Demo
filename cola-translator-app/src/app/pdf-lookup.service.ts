import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class PdfLookupService {

  private fetchOriginalPdfApiUrl = "http://localhost:3000/api/mock-fetch-pdf";
  private translationApiUrl = "http://localhost:3000/api/translate-pdf-immediate"; // version 1, immediate response

  constructor(private http: HttpClient) { }

  getPdfById(udi: string): Observable<any> {
    const options = { headers: { "Content-Type": "application/json" } };
    const remoteData = this.http.get(this.fetchOriginalPdfApiUrl + "/" + udi, options);
    console.log("getPdfById retrieved: ", remoteData);
    return remoteData;
  }

  getPdfTranslation(targetLanguage: string, pdfDoc: string): Observable<any> { // version 1, immediate response
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const body = {
      sourceLanguage: "en",
      targetLanguage: targetLanguage,
      file: pdfDoc
    };
    const options = { headers: headers };
    const remoteData = this.http.post(this.translationApiUrl, body, options);
    console.log("getPdfTranslation retrieved: ", remoteData);
    return remoteData;
  }
}
