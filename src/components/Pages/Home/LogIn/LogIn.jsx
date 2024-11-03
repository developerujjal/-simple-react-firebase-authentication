import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../../../../assets/firebase/firebase.init";
import { useState } from "react";

const LogIn = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const handleSingIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const logedInUser = result.user;
                setUser(logedInUser)
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log('error', errorMessage)
            })
    }

    console.log(user)

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log("User Sign Out!", result)
                setUser(null)

            })
            .catch(error => {
                console.log("error", error)
            })
    }


    return (
        <>
            <div className="flex justify-center mt-10 gap-4">
                {
                    user ?
                        <button
                            onClick={handleSignOut}
                            className=" flex justify-center items-center">
                            <div className="relative inline-flex  group">
                                <div
                                    className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                                </div>
                                <a href="#" title="Get quote now"
                                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    role="button">Sign Out
                                </a>
                            </div>
                        </button> :

                        <button onClick={handleSingIn} className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                            <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                                <span className="relative text-white">Sign Up</span>
                            </span>
                        </button>

                }
            </div>
            <div>
                {
                    user && (
                        <div className="border mx-auto my-8 w-[25%] px-4 py-6">
                            <div>
                                <img src={user?.photoURL} alt="" />
                            </div>
                            <h2>Name: {user?.displayName}</h2>
                            <p>Email: {user?.email}</p>
                        </div>
                    )
                }
            </div>
        </>

    );
};

export default LogIn;