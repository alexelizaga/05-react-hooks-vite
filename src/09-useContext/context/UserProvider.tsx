import { UserContext } from './UserContext';

interface UserProviderProps {
    children: JSX.Element[] | JSX.Element
}

const user = {
    id: 123,
    name: 'Alex Elízaga',
    email: 'alex@google.com'
}

export const UserProvider = ({ children }: UserProviderProps) => {
  return (
    <UserContext.Provider value={{ user }}>
        { children }
    </UserContext.Provider>
  )
}
