import { Component } from '@angular/core';

// Service
import { WikiService } from 'app/services/wiki/wiki.service';
import { WikiResult } from './wiki-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public resultList: WikiResult[]; // where I save results
  private searchParam: string[] = []; // store every char typed

  constructor(private wikiService: WikiService) {}

  /**
   * 
   * @param e KeyboardEvent obj for character keys
   */
  onKeyPress(e: KeyboardEvent) {
    this.searchParam.push(e.key); // add char to the array
    this.getResults(this.searchParam.join(''));
  }

  /**
   * 
   * @param e KeyboardEvent obj, necessary for backspace command
   */
  onKey(e: KeyboardEvent) {
    if(e.code === "Backspace") 
      this.searchParam.pop();
      this.getResults(this.searchParam.join(''));
  }

  /**
   * Creation of the link
   */
  setLink() {
    for(let elem of this.resultList) {
      let link = elem.title.replace(/[\s]/g, '_');
      elem.link = `https://en.wikipedia.org/wiki/ ${link}`;
    }
  }

  /**
   * Retrieves data from wikipedia by search term
   * 
   * @param param string to search
   */
  getResults(param: string) {
    if(param === '' && this.resultList.length > 0) {
      this.resultList = [];
    } else {
      this.wikiService.setWikiUrl(param); // change request param
      this.wikiService.getWiki().subscribe(data => {
        this.resultList = data['query'].search; // assign data
        this.setLink(); // add link for every elemnt
      });
    }
  }
}
