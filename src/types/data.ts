export interface IUsers {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {[key:string]:string};
    address: {[key:string]:string};
}

export interface IPosts {
    userId: number;
    title: string;
    body: string;
    id: number;
}

export interface IComments {
    postId: number;
    id: string;
    name: string;
    email: string;
    body: string;
}