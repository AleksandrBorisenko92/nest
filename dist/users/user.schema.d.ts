import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    us_name: string;
    us_mail: string;
    us_pw: string;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<Document<User, any, any>, any, any>, undefined, {}>;
