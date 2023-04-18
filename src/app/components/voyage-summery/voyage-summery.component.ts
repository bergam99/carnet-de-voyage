import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Travel } from 'src/app/mock/travel-mock/travel.mock';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-voyage-summery',
  templateUrl: './voyage-summery.component.html',
  styleUrls: ['./voyage-summery.component.css'],
})
export class VoyageSummeryComponent {
  @Input() emptyText: string='';

  article?: Travel;
  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.initArticle();
  }

  initArticle() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    const foundArticle = this.articleService.getArticle(id);
    if (foundArticle) {
      this.article = foundArticle;
    }
  }
}
