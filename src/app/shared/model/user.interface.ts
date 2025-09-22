export interface Iuser{
    name : string,
    age : number,
    image : string,
    id : string,
    email : string,
    userRole : 'Candidate' | 'Admin' | 'SuperAdmin'
}