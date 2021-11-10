import { User } from './User';

export interface Commande {
  _id?: string;
  refCommande?: string;
  client?: User;
  dateAchat?: Date;
  mt_total?: number;
  paye?: boolean;
}
