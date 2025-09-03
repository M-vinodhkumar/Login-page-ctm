import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function App() {

    const navigate = useNavigate()
    const [user, setuser] = useState("")
    const [pass, setpass] = useState("")

    const handleuser = (event) => {
        setuser(event.target.value)
    }

    const handlepass = (event) => {
        setpass(event.target.value)
    }

    const check = () => {
        var logindetails = axios.get(`http://localhost:5000/login?username=${user}&password=${pass}`)
        console.log(logindetails);

        logindetails.then(function (data) {
            console.log(data)
            if (data.data === true) {
                navigate("/Success")
            }
            else {
                navigate("/Failed")
            }
        })
    }

    const handlesignup = () => {
        navigate("/Signup")
    }
    return (
        <div  className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('/src/assets/Appbgimage.jpg')",
            }}>
            <nav className="fixed top-0 left-0 w-full flex items-center px-4 sm:px-6 py-3 sm:py-4  bg-white/30 backdrop-blur-lg border-b border-pink-200/30 shadow-lg z-50 transition-all duration-500">
                <h1 className='text-4xl'>📽️</h1>
                <h1 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-orange-600  drop-shadow-md"> CaptureTheMemories</h1>
            </nav>
            <div className="bg-wallpaper bg-cover h-screen flex justify-center items-center ">
                <div className="bg-transparent flex flex-col items-center justify-center gap-5 p-10 border rounded-xl border-transparent backdrop-blur-sm">
                    <div className="text-3xl font-bold">
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-black  ">CaptureTheMemories</h1>
                    </div>
                    <div className="flex flex-col">
                        <input onChange={handleuser} className='border border-black rounded p-2 w-64 focus:outline-none' name="username" placeholder="Username"></input> <br />
                        <input onChange={handlepass} className='border border-black rounded p-2 w-64 focus:outline-none' name="password" placeholder="Password"></input> <br />
                        <button onClick={check} className="bg-blue-600 font-bold text-white p-2 border rounded-lg hover:bg-green-600">Login</button>
                    </div>
                    <div className="flex gap-3 font-bold">
                        <p className='hover:text-red-600'>Do you haven't account?</p>
                        <button className="hover:underline cursor-pointer hover:text-blue-800" onClick={handlesignup}>Register</button>
                    </div>
                </div>

            </div>
        </div>

    )

}

export default App