import { Form } from "./form"

export const RightSide = ()=> {
    return (
        <section className="h-full w-full container py-10 lg:py-20 px-6 sm:px-12 flex flex-col justify-center mx-auto  lg:px-20">
            <h1 className="font-bold text-4xl mb-12">Login</h1>
            <p className="text-zinc-400">Welcome Back! Please login to your accounnt</p>
            <Form/>
        </section>
    )
}