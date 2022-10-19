export interface MessageDto {
  id: number;
  fromid: number;
  toid: number;
  type: string;
  status: number;
  content: string;
  nickname: string;
  jump_link: string;
  avatarURL: string;
  sendtime: Date;
  readtime: Date;
  refid: number;
}
