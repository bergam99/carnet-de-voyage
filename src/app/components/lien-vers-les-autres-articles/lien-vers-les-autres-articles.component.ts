import { Component } from '@angular/core';
import { Travel } from 'src/app/mock/travel-mock/travel.mock';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-lien-vers-les-autres-articles',
  templateUrl: './lien-vers-les-autres-articles.component.html',
  styleUrls: ['./lien-vers-les-autres-articles.component.css']
})
export class LienVersLesAutresArticlesComponent {
  articles:Travel[]=[];

  constructor(private articleService : ArticleService){}

  ngOnInit(){
    this.articles = this.getArticles();
  }

  getArticles(){
    return this.articleService.getArticles();
  }

}
