import { useState } from "react"
import { BsCheck } from "react-icons/bs"


export const Form = ()=> {
    const [check, setCheck] = useState(false)

    const handleCheckButton = ()=> {
        setCheck(!check)
    }
    return(
        <>
            <label htmlFor="" className="flex flex-col mt-8 mb-4 lg:mt-10 lg:mb-10 gap-3 lg:gap-5">
                <span className="text-zinc-400">User Name</span>
                <input
                    type="text"
                    className="outline-none border-2 border-zinc-400 font-semibold rounded-md p-3 text-zinc-800 focus:border-pink-400 hover:border-pink-400 transition-all duration-150"
                    />
            </label>

            <label htmlFor="" className="flex flex-col mt-4 mb-8  lg:mt-10 lg:mb-10 gap-5">
            <span className="text-zinc-400">Password</span>
            <input
                type="password"
                className="outline-none border-2 border-zinc-400  rounded-md p-3 text-zinc-800 focus:border-pink-400 hover:border-pink-400 transition-all duration-150"
                />
            </label>
            <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                    <div onClick={handleCheckButton} className={`h-4 w-4 rounded-md border flex items-center justify-center border-zinc-400 ${check === true ? 'border-pink-400 bg-pink-400' : ''} transition-all duration-150`}>
                        {check === true && 
                            <BsCheck className="text-white"/>
                        }
                    </div>
                    <div className="text-zinc-400 text-sm lg:text-base">Remember Me</div>
                </div>

                <a className="text-zinc-400 text-sm lg:text-base cursor-pointer hover:text-pink-400 transition-all duration-150">
                    Forget Password?
                </a>
            </div>

            <button className="py-6 w-full bg-pink-400 text-white text-xl font-semibold rounded-xl my-12 cursor-pointer hover:bg-violet-400 transition--all duration-500" >Login</button>

            <div className="text-zinc-400">
                New User? <a className="text-pink-400 font-semibold ml-2 cursor-pointer hover:text-purple-400 trasiton-all duration-150">SignUp</a>
            </div>
        </>
    )
}