import { Component } from '@angular/core';
import { Travel } from 'src/app/mock/travel-mock/travel.mock';
import { ArticleService } from '../../services/article/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  articles:Travel[]=[];

  constructor(private articleService : ArticleService){}

  ngOnInit(){
    this.articles = this.getArticles();
  }

  getArticles(){
    return this.articleService.getArticles();
  }
}
