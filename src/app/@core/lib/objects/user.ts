import { Reputation } from './reputation';
import {Score} from './score';

export class User {
  username: string;
  password: string;
  id: string;
  reputation: Score;

  constructor(userName: string, password: string, id: string, reputation: Score) {
    this.username = userName;
    this.password = password;
    this.id = id;
    this.reputation = reputation;
  }
}
