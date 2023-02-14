import NextAuth, { ISODateString, NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import KakaoProvider from 'next-auth/providers/kakao'
import NaverProvider from 'next-auth/providers/naver'
import CredentialsProvider from 'next-auth/providers/credentials'
import * as bcrypt from 'bcrypt'
import { TypeORMLegacyAdapter } from '@next-auth/typeorm-legacy-adapter'
import * as entities from 'lib/entities'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prismadb'

export interface CustomDefaultSession {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
  expires: ISODateString
  id?: string
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      id: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    KakaoProvider({
      id: 'kakao',
      clientId: process.env.KAKAO_CLIENT_ID ?? '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET ?? '',
    }),
    NaverProvider({
      id: 'naver',
      clientId: process.env.NAVER_CLIENT_ID ?? '',
      clientSecret: process.env.NAVER_CLIENT_SECRET ?? '',
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },

  callbacks: {
    session: async ({ session, token, user }) => {
      const newSession = session as CustomDefaultSession
      newSession.id = token.sub
      return Promise.resolve(newSession)
    },
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      const isSignIn = user ? true : false
      return Promise.resolve(token)
    },
  },
  logger: {
    error(code, metadata) {
      console.log({ type: 'inside error logger', code, metadata })
    },
    warn(code) {
      console.log({ type: 'inside warn logger', code })
    },
    debug(code, metadata) {
      console.log({ type: 'inside debug logger', code, metadata })
    },
  },
  debug: true,
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/error/error',
  },
}

export default NextAuth(authOptions)
