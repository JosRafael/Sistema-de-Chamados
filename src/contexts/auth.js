import { useState, useEffect, createContext } from "react";
import {auth, db} from '../services/firebaseConnection'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {doc, getDoc, setDoc}  from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadinAuth]=useState(false);
    const navigate=useNavigate()

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
                storageUser(data)
                setLoadinAuth(false)
                toast.success("Seja bem-vindo ao sistema! ")
                navigate("/dashboard")
            })
            .catch((e)=>{
                console.error(e)
                setLoadinAuth(false)
            })
        })
    }

    function storageUser(data){
        localStorage.setItem('@ticketsPRO', JSON.stringify(data))
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