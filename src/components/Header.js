import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

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

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }


  return (
    <div className="absolute w-screen px-8  py-2 bg-gradient-to-b z-10 from-black  flex justify-between">
      <img className="w-28 h-18" src={LOGO} alt="logo" />
      {user && (
        <div className="flex ">
         { showGptSearch&& <select className='bg-red-700 text-white rounded-lg py-2 px-3 mx-2 my-3' onChange={handleLanguageChange} >
            {SUPPORTED_LANGUAGES?.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>{ lang.name }</option>
            ))}

            
          </select>}
          <button
            className="bg-red-700 text-white rounded-lg py-2 px-3 mx-2 my-3"
            onClick={handleGptSearchClick}
          >
            { showGptSearch ?  "Home" : "GPT Search"}
          </button>
          <img className="w-12 h-12 m-4" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;