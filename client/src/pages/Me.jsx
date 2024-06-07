import { redirect, useLoaderData } from "react-router-dom"
import { customAxios } from "../utils"

export const loader = async () => {
  try {
    const res = await customAxios('/users/me')
    const user = res.data.user
    return { user }
  } catch (error) {
    return redirect('/login')
  }
}

const Me = () => {
  const { user } = useLoaderData()

  return (
    <div>{user.username}</div>
  )
}

export default Me