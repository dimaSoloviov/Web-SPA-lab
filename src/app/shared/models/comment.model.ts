import {UserModel} from './user.model';

export interface CommentModel {

  itemId: string;
  userId: string;
  commentText: string;
  commentRate: number;

}
