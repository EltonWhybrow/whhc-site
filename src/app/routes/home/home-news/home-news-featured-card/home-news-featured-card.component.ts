import { Component, Input } from '@angular/core';
import { News } from '../../../../components/news/news.models';

@Component({
  selector: 'whhc-news-featured-card',
  templateUrl: './home-news-featured-card.component.html',
})
export class HomeNewsFeaturedCardComponent {

  @Input() article: News;

}

