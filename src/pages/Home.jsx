import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>Hello! {user?.displayName}</div>
    </div>
  );
}
