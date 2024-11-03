import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      
      <div className="text-3xl w-1/2 px-10">
        <Image
          src={"faceBook.svg"}
          height={100}
          width={300}
          alt="Facebook Logo"
        />
        <p className="ml-8 -mt-3">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>

      
      <div className="bg-white flex flex-col  p-20 rounded-xl w-1/3 ">
      <input
          className="my-2 border border-1  border-gray-100  p-3 rounded-md placeholder-gray-500 focus:outline-1 outline-black "type="email"
          placeholder="enter email adress or phone number"
        />
        <input
          className="my-2 border border-1  border-gray-100  p-3  rounded-md placeholder-gray-500 focus:outline-1 outline-blue-600 "
          type="password"
          placeholder="Password"
        />
        <button className="bg-blue-600 hover:bg-blue-500 text-white my-2 py-2   text-lg text font-bold rounded-md">
          Logi in
        </button>
        <p className="my-2 text-sm text-blue-500 font-thin hover:underline cursor-pointer text-center">Forgotten password?</p>
        <span className="my-2">
          <hr />
        </span>
        <button className="bg-green-500 hover:bg-green-600 text-white my-2 py-2 text-md w-fit text font-bold rounded-md px-5 mx-auto">Create new account</button>
      </div>
    </div>
  );
}
