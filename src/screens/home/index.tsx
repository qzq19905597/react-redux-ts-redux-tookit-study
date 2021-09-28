import { useAuth } from "context/auth-context";
import { LoginScreen } from "screens/login/login";
import { Project } from "screens/project-list";
export const Home = () => {
  const { user } = useAuth();
  return <>{!user ? <LoginScreen /> : <Project />}</>;
};
