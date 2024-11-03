import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../../../assets/firebase/firebase.init";

const LogIn = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
 
    const handleSingIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log('error', errorMessage)
        })
    }



    return (
        <div className="flex justify-center mt-10">
            <button onClick={handleSingIn} className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white">Sign Up</span>
                </span>
            </button>
        </div>
    );
};

export default LogIn;