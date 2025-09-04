import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

function Fail(){

    const navigate = useNavigate()

    const handlesignup = () => {
    navigate("/Signup")
    }

    return(
        <div  className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhJTIwaW4lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')",
            }}>
        <div className="bg-transparent flex flex-col items-center justify-center gap-5 p-10 border rounded-xl border-transparent backdrop-blur-lg">
            <div className="text-3xl font-bold">
            <motion.h1  initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}>Sorry!</motion.h1>
        </div>
        <div className="flex flex-col">  
            <input className='border border-black rounded p-2 w-64 focus:outline-none' name="username" placeholder="Username"></input> <br/>
            <input className='border border-black rounded p-2 w-64 focus:outline-none' name="password" placeholder="Password"></input> <br/>
            <h1 className="font-bold text-center text-2xl">Login Failed</h1>
        </div> 
        <div className="flex gap-3 font-bold">
            <p>Do you haven't account?</p> 
            <button className="hover:underline cursor-pointer hover:text-blue-800" onClick={handlesignup}>Register</button>
        </div>
        </div>  
    </div>
    )

}

export default Fail