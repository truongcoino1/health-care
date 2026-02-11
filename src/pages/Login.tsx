import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../../public/assets/icons/logo.svg";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login("user", "password");
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-dark-600 flex items-center justify-center px-4">
      <div className="w-full max-w-[400px] bg-dark-500 rounded-lg p-8 shadow-lg">
        <div className="flex justify-center mb-8">
          <img className="w-[144px] h-[52px]" src={Logo} alt="logo" />
        </div>

        <button
          onClick={handleLogin}
          className="w-full h-12 bg-gradient-to-r from-primary-300 to-primary-400 text-light font-bold rounded hover:opacity-90 transition-opacity"
        >
          ログイン
        </button>
      </div>
    </div>
  );
}

export default Login;
