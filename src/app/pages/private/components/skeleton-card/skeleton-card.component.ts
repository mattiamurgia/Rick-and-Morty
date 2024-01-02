import { Component, Input } from '@angular/core';
import { Card } from 'src/app/model/Card';

@Component({
  selector: 'app-skeleton-card',
  templateUrl: './skeleton-card.component.html',
  styleUrls: ['./skeleton-card.component.scss'],
})
export class SkeletonCardComponent {
  skeletonArray: any[] = Array.from({ length: 6 }, (v, i) => i);
}
