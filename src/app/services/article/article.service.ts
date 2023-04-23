import { Injectable } from '@angular/core';
import { TRAVEL, Travel } from 'src/app/mock/travel-mock/travel.mock';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}

  getArticles(): Travel[] {
    return TRAVEL;
  }

  getArticle(id: number): Travel | undefined {
    return TRAVEL.find(article => article.id === id);
  }
}
