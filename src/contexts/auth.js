import { useState, useEffect, createContext } from "react";
import {auth, db} from '../services/firebaseConnection'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {doc, getDoc, setDoc}  from "firebase/firestore";

export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadinAuth]=useState(false)

    function signIn(email, password){
        console.log(email)
        console.log(password)
        alert("Logado com sucesso!")
    }
    async function signUp(email,password,nome){
        setLoadinAuth(true)
        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (value)=>{
            let uid= value.user.uid

            await setDoc(doc(db, "users", uid), {
                nome: nome,
                avatarUrl: null,
            })
            .then(()=>{
                let data={
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    avatarUrl: null
                }
                setUser(data)
                setLoadinAuth(false)
            })
            .catch((e)=>{
                console.error(e)
                setLoadinAuth(false)
            })
        })
    }
    return(
        <AuthContext.Provider
        value={{
            signed: !!user,
            user,
            signIn,
            signUp,
            loadingAuth
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}