import { UserContext } from './UserContext';
import { useState } from 'react';

interface UserProviderProps {
    children: JSX.Element[] | JSX.Element
}

// const user = {
//     id: 123,
//     name: 'Alex Elízaga',
//     email: 'alex@google.com'
// }

export const UserProvider = ({ children }: UserProviderProps) => {

  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
