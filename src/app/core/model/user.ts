export interface User {
    username: string,
    email: string,
    avatarUrl: string
}

export interface UserDetails extends User{
    lastLoginDate: Date
    registrationDate : Date,
}

export interface AuthData extends User {
    password: string,
    
}

