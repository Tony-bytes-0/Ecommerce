export interface UserToken {
  token: string;
  user: {
    _id: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    person: {
      fullName: string;
      phoneNumber: string;
      codePostal: string;
      country: string;
    };
  };
}

export interface LoginPromiseToken {
  data: UserToken;
  msg: string;
  statusCode: number;
}

export type UserStandarData = {
  createdAt: string;
  deletedAt: string;
  email: string;
  person: {
    codePostal: string;
    country: string;
    fullName: string;
    phoneNumber: string;
    role: string;
  };
  role: string;
  id: string;
};

export type UserStandarDataList = UserStandarData[];
