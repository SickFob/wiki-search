import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';

@Injectable()
export class WikiService {

  private wikiUrl: string;
  public wikiResult = {};
  constructor(private http: HttpClient) { }

  /**
   * 
   * @param searchText settin param in url
   */
  setWikiUrl(searchText: string) {
    searchText = searchText.replace(/[\s]/g, '_');
    this.wikiUrl =`https://en.wikipedia.org/w/api.php?action=query&callback=JSONP_CALLBACK&format=json&generator=links&list=search&srsearch=${searchText}&utf8=1`;
  }

  /**
   *  perform the async api request
   */
  getWiki() {
    return this.http.jsonp(this.wikiUrl, '');
  }

}
