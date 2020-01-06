import { Reputation } from './reputation';

export class User {
  username: string;
  password: string;
  id: string;
  reputation: Reputation;

  constructor(userName: string, password: string, id: string, reputation: Reputation) {
    this.username = userName;
    this.password = password;
    this.id = id;
    this.reputation = reputation;
  }
} 