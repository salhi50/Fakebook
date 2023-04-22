declare type User = {
  username: string;
  password: string;
  email: string;
  id: string;
  joined: string;
}

type GlobalUserContext = {
  current_user: User | null;
}