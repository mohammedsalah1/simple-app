import { Injectable } from "@angular/core";
import { Adapter } from '../@core/interfaces/adapter.interface';


export class User {
  constructor(
    public id: number,
    public email: string,
    public first_name: string,
    public last_name: string,
    public avatar: string
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class UserAdapter implements Adapter<User> {
  adapt(item: any): User {
    return new User(item.id, item.email, item.first_name, item.last_name, item.avatar);
  }
}
