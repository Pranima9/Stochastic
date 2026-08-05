// import React from 'react'

const LoginPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
        <form className="flex flex-col justify gap-2 justify-center w-[50vw] border border-blue-400  p-5 rounded-xl ">
            <h1 className="text-3xl font-bold text-red-500 flex mb-5">Login </h1>
            <input type="email" className="border-2 border-red-300 placeholder:text-sm p-1 rounded-md" placeholder="Enter your email address"/>
            <input type="password" className="border-2 border-red-300 placeholder:text-sm p-1 rounded-md" placeholder="Enter your password"/>
            <button className="bg-green-400 text-white font-bold h-10 rounded-lg mt-3 hover:bg-green-550 transition-all"> Login </button>
            <button className="bg-blue-400 text-white font-bold h-10 rounded-lg ">Register</button>
            <a href="https://en.wikipedia.org/wiki/Hello,_world" className="text-gray-600 font-medium w-30 text-sm hover:underline transition-all duration-200 hover:translate-y-1">Forgot Password?</a>
        </form>
    </div>
  )
}

export default LoginPage;