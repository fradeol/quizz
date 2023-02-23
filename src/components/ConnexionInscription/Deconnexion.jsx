import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "../ConnexionInscription/ConnexionInscription.css"


export default function LogOut() {

  const {logOut} = useContext(UserContext)

  return (
    <button className="center" onClick={logOut}>Se deconnecter</button>
  )


}
