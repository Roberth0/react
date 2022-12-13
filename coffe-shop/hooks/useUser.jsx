import { useEffect } from 'react'
import Router from 'next/router'

export default function useUser(username = false) {
  const user = username
  useEffect(() => {
    if (!user) Router.push('/login')
  }, [user])
  return user
}
