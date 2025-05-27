import Button from "./Button";

function SignupForEmail() {
    return (
        <div className="w-full flex lg:h-12 h-10 border rounded-full mt-4 border-white ">
            <input
                className="bg-transparent font-light text-sm outline-none w-full placeholder:text-white placeholder:font-light placeholder:text-sm pl-8"
                placeholder="Enter your email"
            ></input>
            <button className="h-full lg:px-8 px-5 bg-gradient-to-r from-my-green to-my-blue rounded-full outline-none hover:from-my-blue hover:to-my-blue duration-200 transition-all">
                Signup
            </button>
        </div>
    );
}

export default SignupForEmail;
