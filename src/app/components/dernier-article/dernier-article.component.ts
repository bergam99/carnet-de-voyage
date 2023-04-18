import { Component } from '@angular/core';
import { Travel } from 'src/app/mock/travel-mock/travel.mock';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-dernier-article',
  templateUrl: './dernier-article.component.html',
  styleUrls: ['./dernier-article.component.css']
})
export class DernierArticleComponent {
  articles:Travel[]=[];

  constructor(private articleService : ArticleService){}

  ngOnInit(){
    this.articles = this.getArticles();
  }

  getArticles(){
    return this.articleService.getArticles();
  }

}
