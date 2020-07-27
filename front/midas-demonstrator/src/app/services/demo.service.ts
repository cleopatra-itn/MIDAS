import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Document, DocumentResult } from '../models/Document';
import { Tagger } from '../models/Tagger';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    "content-type": "application/json",
  })
}

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  // TODO 
  demoUrl: string = "http://cleopatra.ijs.si/midas/api/v1/service";

  demoPredict = "/predict"
  demoLink = "/predict/link"
  demoFile = "/predict/upload"
  constructor(private http: HttpClient) { }


  getModels(): Observable<Tagger[]> {
    return this.http.get<Tagger[]>(`${this.demoUrl}`);

  }
  getPrediction(document: Document): Observable<any> {
    return this.http.post<Document>(`${this.demoUrl}${this.demoPredict}`, document, httpOptions);
  }
  getPredictionLink(document: Document): Observable<any> {
    return this.http.post<Document>(`${this.demoUrl}${this.demoLink}`, document, httpOptions);
  }

  upload(document:Params) {
    const formData: FormData = new FormData();
    formData.append('file', document.file, document.file.name);
    formData.append('lang',document.lang)
    formData.append('level',document.level)

    let headers = new HttpHeaders({
      'FileName': document.file.name,
      Accept: "application/plain",
      responseType: "arraybuffer",
    });

    return this.http.post<any>(`${this.demoUrl}${this.demoFile}`, formData,
      {
        headers,
      }
    );
  }

}
