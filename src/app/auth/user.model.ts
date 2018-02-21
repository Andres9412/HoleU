export class User {

  constructor(
  public email: string,
  public password: string,
  public ownSchedule: any[],
  public firstName?: string,
  public lastName?: string,
  public _id?: string,
  public parnerSchedule?: any[]) {

  }

}
