import axios from "axios"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { changeLoginStatus } from "../features/login/loginSlice"

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const navigate =useNavigate()
  const dispatch=useDispatch()
  const onSubmit = (data) =>{
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`,data,{withCredentials:true})
    .then(response=>{
        console.log(response)
        dispatch(changeLoginStatus(true))
        navigate("/")})
    .catch(error=>{
        dispatch(changeLoginStatus(false))
        console.log(error)})
  }

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="mt-8 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
       <label htmlFor="email">Email</label>
       <input className="mt-2 border border-indigo-800 py-2 rounded-sm" type="email" id="email" {...register("email",{required:true})} />
       {errors.email && <span>This field is required</span>}


       <label htmlFor="password">Password</label>
       <input className="mt-2 border border-indigo-800 py-2 rounded-sm" type="password" id="password" {...register("password",{required:true})} />
       {errors.password && <span>This field is required</span>}


      <input className="py-2 mt-6 bg-indigo-800 text-white hover:bg-indigo-700" type="submit" value={"Login"} />
    </form>
  )
}