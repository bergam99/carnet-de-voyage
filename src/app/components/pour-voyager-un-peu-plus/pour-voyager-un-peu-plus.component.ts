import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Travel } from 'src/app/mock/travel-mock/travel.mock';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-pour-voyager-un-peu-plus',
  templateUrl: './pour-voyager-un-peu-plus.component.html',
  styleUrls: ['./pour-voyager-un-peu-plus.component.css']
})
export class PourVoyagerUnPeuPlusComponent {
  article?:Travel;
  articles:Travel[]=[];


  constructor(
    private articleService:ArticleService,
    private activatedRoute : ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(){
    this.initArticle();
    this.articles = this.getArticles();

  }
  getArticles(){
    return this.articleService.getArticles();
  }

  initArticle(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundArticle = this.articleService.getArticle(id);
    if (foundArticle){
      this.article = foundArticle;
    }
  }
}
