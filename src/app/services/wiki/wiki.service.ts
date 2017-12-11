import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class WikiService {

  private wikiUrl: string;
  public wikiResult = {};
  constructor(private jsonp: Jsonp, private http: Http) { }

  /**
   * 
   * @param srsearch settin param in url
   */
  setWikiUrl(srsearch) {
    srsearch = srsearch.replace(/[\s]/g, '_');
    this.wikiUrl =`https://en.wikipedia.org/w/api.php?action=query&callback=JSONP_CALLBACK&format=json&generator=links&list=search&srsearch=${srsearch}&utf8=1`;
  }

  /**
   *  perform the async api request
   */
  getWiki() {
    return this.jsonp.request(this.wikiUrl);
  }

}
