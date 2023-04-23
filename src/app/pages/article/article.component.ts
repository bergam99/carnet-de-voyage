import { Component } from '@angular/core';
import { Travel } from 'src/app/mock/travel-mock/travel.mock';
import { ArticleService } from '../../services/article/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  article?:Travel;

  constructor(
    private articleService:ArticleService,
    private activatedRoute : ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(){
    this.initArticle();
  }

  initArticle(){
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundArticle = this.articleService.getArticle(id);
    if (foundArticle){
      this.article = foundArticle;
    }
  }

}
