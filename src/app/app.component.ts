import { Component } from '@angular/core';

// Service
import { WikiService } from 'app/services/wiki/wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public resultList; // where I save results
  private searchParam: string[] = []; // store every char typed

  
  constructor(private wikiService: WikiService) {}

  /**
   * 
   * @param e event obj for character keys
   */
  onKeyPress(e) {
    this.searchParam.push(e.key); // add char to the array
    this.getResults(this.searchParam.join(''));
  }

  /**
   * 
   * @param e event obj, necessary for noncharacter keys
   */
  onKey(e) {
    if(e.keyCode == 8) 
      this.searchParam.pop();
      this.getResults(this.searchParam.join(''));
  }

  /**
   * creation of the link
   */
  setLink() {
    for(let elem of this.resultList) {
      let link = elem.title.replace(/[\s]/g, '_');
      elem.link = `https://en.wikipedia.org/wiki/ ${link}`;
    }
  }



  getResults(param) {
    this.wikiService.setWikiUrl(param); // change request param
    this.wikiService.getWiki().map(data => {
      this.resultList = data['_body'].query.search; // assign data
      this.setLink(); // add link for every elemnt
    }).subscribe(); // make the request
  }
}
