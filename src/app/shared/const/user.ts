import { Iuser } from "../model/user.interface";

export const userArr : Array<Iuser> = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 25,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    id : '123',
    userRole : 'Candidate'
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 30,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    id : '124',
    userRole : 'Admin'
  },
  {
    name: "Michael Johnson",
    email: "michael.j@example.com",
    age: 28,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    id : '125',
    userRole : 'SuperAdmin'
  },
  {
    name: "Emily Davis",
    email: "emily.d@example.com",
    age: 22,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    id : '126',
    userRole : 'Candidate'
  }
];