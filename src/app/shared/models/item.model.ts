import {CommentModel} from './comment.model';

export interface item {
  id: number;
  name: string;
  shortDescription: string;
  image: string;
  awgPrice: number;
  fullDescription?: string;
  specs: string;
  rate?: number;
  comments?: CommentModel[];
  links?: string;
}
