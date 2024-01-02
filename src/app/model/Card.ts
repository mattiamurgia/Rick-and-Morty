export type Card = {
  id: number;
  name: string;
  image: string;
  gender: Gender;
  species: Species;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human',
}
