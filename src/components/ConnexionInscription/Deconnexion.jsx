import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import "../ConnexionInscription/ConnexionInscription.css"


export default function LogOut() {
  const { toggleModals } = useContext(UserContext);

  const navigate = useNavigate;

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
    //   alert("tu peux pas te déco maintenant");
    }
  };

  return (
    <button className="center" onClick={logOut}>Se deconnecter</button>
  )


}
