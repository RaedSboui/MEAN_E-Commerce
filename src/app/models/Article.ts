import { Categorie } from './Categorie';
import { SCategorie } from './SCategorie';

export interface Article {
  _id?: string;
  reference?: string;
  designation?: string;
  prixAchat?: number;
  prixVente?: number;
  prixSolde?: number;
  marque?: string;
  qteStock?: number;
  caracteristiques?: string;
  imageartpetitf?: string;
  imageartgrandf?: Array<string>;
  categorie?: Categorie;
  scategorie?: SCategorie;
}
