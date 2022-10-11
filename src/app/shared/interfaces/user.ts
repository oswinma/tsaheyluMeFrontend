export interface User {
  id: number;
  email: string;
  nickname: string;
  country: string;
  language: string;
  avatarURL: string;
  status: number;
  signuptime: Date;
  password: string;
  emailSubscription:boolean;
  favurlSubscription:boolean;
}
