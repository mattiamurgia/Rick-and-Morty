import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { Character } from '../model/Character';
import { Card } from '../model/Card';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  registrationUser = new BehaviorSubject<User>({ email: '', password: '' });
  userLogged = new BehaviorSubject<boolean>(false);
  http = inject(HttpClient);
  private apiUrl = 'https://rickandmortyapi.com/api/character';
  errorState = new BehaviorSubject<boolean>(false);

  constructor() {}

  getAllCharacter(pageNumber?: number) {
    const urlWithPage = `${this.apiUrl}?page=${pageNumber}`;
    return this.http
      .get<Character>(urlWithPage)
      .pipe(map((allCharacter) => allCharacter));
  }

  getCharacterID(id: number) {
    return this.http
      .get<Card>(`${this.apiUrl}/${id}`)
      .pipe(map((singleCharacter) => singleCharacter));
  }

  searchNameCharacter(name: string) {
    const urlWithName = `${this.apiUrl}/?name=${name}`;
    return this.http
      .get<Character>(urlWithName)
      .pipe(map((character) => character.results));
  }
}
