export interface InvitationDTO {
  id: number;
  fromid: number;
  toid: number;
  status: number;
  popup: boolean;
  nickname: string;
  avatarURL: string;
  bondtime: Date;
}
