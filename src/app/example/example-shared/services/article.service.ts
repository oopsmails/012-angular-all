import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { GetArticleResponseInterface } from 'src/app/shared/models/getArticleResponse.interface';
import { ArticleInterface } from '../../../shared/models/article.interface';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
      map((response: GetArticleResponseInterface) => {
        return response.article;
      })
    );
  }
}
