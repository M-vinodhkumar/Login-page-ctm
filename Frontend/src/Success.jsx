import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function Success() {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center "
            style={{
                backgroundImage:
                    "url('/src/assets/Bg image.jpg')"
            }}
        >

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative bg-white/40 backdrop-blur-xl border border-pink-200/40 
                shadow-2xl p-10 rounded-2xl w-80 md:w-96 overflow-hidden text-center"
            >

                <div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent 
                    bg-gradient-to-r from-black via-orange-100 to-white
                    opacity-80 animate-pulse"
                ></div>

                {/* Content */}
                <div className="relative z-10">
                    {/* Heading */}
                    <motion.h1
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl font-extrabold mb-4 
                    bg-gradient-to-r from-black via-black to-orange-400 
                    bg-clip-text text-transparent"
                    >
                        Welcome  CaptureTheMemories
                    </motion.h1 >
                    <motion.h1 initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }} className="text-4xl">📽️</motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-700 text-xl font-bold mb-6"
                    >
                        Feel the Moment, See the Beauty
                    </motion.p>

                    {/* Logout Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 via-blue-400 to-orange-400 text-white 
                    py-2 px-6 rounded-lg shadow-md hover:shadow-xl transition-all"
                        onClick={() => navigate("/")}
                    >
                        Logout
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}
export default Success