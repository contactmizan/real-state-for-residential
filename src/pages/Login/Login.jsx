import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Footer from "../Shared/Footer/Footer";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const { signIn, signInWithGitHub, signInwithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGitHubSignIn = async () => {
        try {
            await signInWithGitHub();
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            console.error("GitHub Sign-in Error:", error);
        }
    };

    // Add async/await here to ensure the navigation happens after sign-in success
    const handleGoogleSignIn = async () => {
        try {
            await signInwithGoogle();  // Await Google sign-in
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            console.error("Google Sign-in Error:", error.message);
        }
    };

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div>
            <Navbar />
            <div>
                <h2 className="text-3xl text-center my-10">Please Login</h2>
                <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>

                {/* google popup log in */}
                <div className="text-center">
                    <button onClick={handleGoogleSignIn} className="btn btn-primary">
                        <FaGoogle className="text-3xl mr-2" /> Google Login
                    </button>
                </div>

                {/* GitHub login */}
                <div className="space-y-2 text-center flex flex-col items-center mb-2">
                    <h2>or</h2>
                    <button className="btn" onClick={handleGitHubSignIn}>
                        <FaGithub className="text-3xl" />
                    </button>
                </div>

                <p className="text-center">Don't have an account? Please <Link to="/register" className="hover:text-blue-700 hover:underline text-blue-400 font-bold">Register</Link></p>
            </div>
            <div className="mt-4">
                <Footer />
            </div>
        </div>
    );
};

export default Login;
