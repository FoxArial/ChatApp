import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";
import { auth, database } from "./firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      //console.log("got user: ", user);
      if (user) {
        setIsAuth(true);
        setUser(user);
        updateUserData(user.uid);
      } else {
        setIsAuth(false);
        setUser(null);
      }
    });

    return unsub;
  }, []);

  const updateUserData = async (userId)=>{
    const docRef = doc(database, 'users', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
      let data = docSnap.data();
      console.log(data);
      setUser({...user, username: data.username, profileUrl: data.profileURL, userId: data.userId} );
    }
    
  }

  const logout = async () =>{
    try{
    await signOut(auth);
    return {success: true}
  }
  catch(error){
    console.log ("error", error.message);
    return {success: false};
  }
}

  return (
    <AuthContext.Provider value={{ user, isAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth must be used inside AuthContextProvider");
  }

  return value;
};
