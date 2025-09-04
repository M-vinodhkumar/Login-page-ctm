import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Signup() {

    const navigate = useNavigate()
    const [user, setuser] = useState("")
    const [pass, setpass] = useState("")
    const [scpword, setscpword] = useState("")

    const handlelogin = () => {
        navigate("/")
    }

    const getuser = (event) => {
        setuser(event.target.value)
    }

    const getpass = (event) => {
        setpass(event.target.value)
    }

    const getcpword = (event) => {
        setscpword(event.target.value)
    }

    const addsignup = () => {
        var Signupdetails = axios.get(`http://localhost:5000/login?username=${user}&password=${pass}`)
        alert("Register Completed")
        navigate('/')

    }

    return (
        <div  className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('/src/Bg image.jpg')",
            }}>
            <div className="bg-transparent flex flex-col items-center justify-center gap-5 p-10 border rounded-xl border-transparent backdrop-blur-lg">
                <div className="text-3xl font-bold">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-black  ">CaptureTheMemories</h1>
                </div>
                <div className="flex flex-col">
                    <input onChange={getuser} className='border border-black rounded p-2 w-64 focus:outline-none' name="username" placeholder="Username"></input> <br />
                    <input onChange={getpass} className='border border-black rounded p-2 w-64 focus:outline-none' name="password" placeholder="Password"></input> <br />
                    <input onChange={getcpword} className='border border-black rounded p-2 w-64 focus:outline-none' name="Confirm Password" placeholder="Confirm Password"></input> <br />
                    <button className="bg-blue-600 font-bold text-white p-2 border rounded-lg hover:bg-green-600" onClick={addsignup}>Signup</button>
                </div>
                <div className="flex gap-3 font-bold">
                    <p>Already have an account?</p>
                    <button className="hover:underline cursor-pointer hover:text-blue-800" onClick={handlelogin}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Signup