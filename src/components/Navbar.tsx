'use client'

import { signIn, signOut } from 'next-auth/react'
import { Navbar } from '@/subframe/components/Navbar'
import { OAuthSocialButton } from '@/subframe/components/OAuthSocialButton'
import { Button } from '@/subframe/components/Button'
import Link from 'next/link'
import { getUserSession } from '../lib/session'

const Nav = () => {
  return (
    <Navbar className="bg-transparent">
      <Link href={'/'}>
        <Navbar.Item selected={true}>Home</Navbar.Item>
      </Link>
      <Link href={'/find'}>
        <Navbar.Item selected={true}>Find</Navbar.Item>
      </Link>
      <Button onClick={() => signIn()} variant="neutral-secondary">
        Sign in with Google
      </Button>
      <Button onClick={() => signOut()} variant="neutral-secondary">
        Log Out
      </Button>
    </Navbar>
  )
}

export default Nav
