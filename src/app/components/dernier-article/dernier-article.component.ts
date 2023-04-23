import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Travel } from 'src/app/mock/travel-mock/travel.mock';
import { ArticleService } from 'src/app/services/article/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dernier-article',
  templateUrl: './dernier-article.component.html',
  styleUrls: ['./dernier-article.component.css'],
  // date pipe
  providers: [DatePipe],
})
export class DernierArticleComponent {
  articles: Travel[] = [];
  @Input() dateForDeparture: number = 0;
  @Input() dateForArrival: number = 0;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.articles = this.getArticles();
  }

  getArticles() {
    return this.articleService.getArticles();
  }



}
