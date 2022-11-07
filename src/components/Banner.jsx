import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';

const SignInButton = () => (
    <button className="ms-auto btn btn-dark auth-btn" onClick={signInWithGoogle}>Sign in</button>
);

const SignOutButton = () => (
    <button className="ms-auto btn btn-dark auth-btn" onClick={signOut}>Sign out</button>
);

const AuthButton = () => {
    const [user] = useAuthState();
    return user ? <SignOutButton /> : <SignInButton />;
};

export const isAuth = () => {
    const [user] = useAuthState();
    return user ? true : false;
}

const Banner = ({title}) => (   
    <div>
         <h1>{ title }</h1>
         <AuthButton />
    </div> 
);
  
export default Banner;