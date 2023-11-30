import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';


const Header = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  }

   useEffect(() => {
     const unsubscribe =  onAuthStateChanged(auth, (user) => {
       if (user) {
         // User is signed out
         const { uid, email, displayName, photoURL } = user;
         dispatch(
           addUser({
             uid: uid,
             email: email,
             displayName: displayName,
             photoURL: photoURL,
           })
         );
         // Redirect the user to browse page
         navigate("/browse");
       } else {
         // User is signed out
         dispatch(removeUser());
         navigate("/");
       }
     });

     // unsubscribe when component unmount
     return () => unsubscribe()
   }, []);


  return (
    <div className="absolute w-screen px-8  py-2 bg-gradient-to-b z-10 from-black flex justify-between">
      <img
        className="w-28 h-18"
        src={LOGO}
        alt="logo"
      />
      {user && <div className="flex">
        <img className="w-12 h-12 m-4" alt="usericon" src={user?.photoURL} />
        <button onClick={handleSignOut} className="font-bold text-white">
          Sign Out
        </button>
      </div>}
    </div>
  );
}

export default Header;