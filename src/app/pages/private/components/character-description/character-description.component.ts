import { Component, Input } from '@angular/core';
import { Card } from 'src/app/model/Card';
import { Character } from 'src/app/model/Character';

@Component({
  selector: 'app-character-description',
  templateUrl: './character-description.component.html',
  styleUrls: ['./character-description.component.scss'],
})
export class CharacterDescriptionComponent {
  @Input() character!: Card;
}
