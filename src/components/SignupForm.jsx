import { useForm } from "react-hook-form"
import ErrorElement from "./ErrorElement"
import axios from "axios"

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data)=>
  {
    axios.post(`${import.meta.env.VITE_API_BASE_URL}`,data)
    .then(response=>{console.log(response)})
    .catch(error=>{console.log(error)})
  }

  console.log(watch("example")) // watch input value by passing the name of it

  return(
    <form className="mt-8 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
       <label htmlFor="name">Name</label>
       <input className="mt-2 border border-indigo-800 py-2 rounded-sm" type="text" id="name" {...register("name",{required:true})}/>
       {errors.name && <ErrorElement field={"Name"} type={errors.name.type} />}


       <label htmlFor="email">Email</label>
       <input className="mt-2 border border-indigo-800 py-2 rounded-sm" type="email" id="email" {...register("email",{required:true,pattern:/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/})}/>
       {errors.email && <ErrorElement field={"Email"} type={errors.email.type} />}


       <label htmlFor="password">Password</label>
       <input className="mt-2 border border-indigo-800 py-2 rounded-sm" type="password" id="password" {...register("password",{required:true,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:"|<>?`~[\]\\;',./-]).{6,16}$/})} />
       {errors.password && <ErrorElement field={"Password"} type={errors.password.type} />}

      <input type="submit" value={"SignUp"}className="py-2 mt-6 bg-indigo-800 text-white hover:bg-indigo-700" />
    </form>
  )
}