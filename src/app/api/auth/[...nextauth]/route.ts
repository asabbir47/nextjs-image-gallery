import { userAgent } from 'next/server';
import type { NextApiRequest, NextApiResponse, } from "next";
import NextAuth from 'next-auth';
import {options} from './options';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    // console.log(req);
    const { device } = userAgent(req)
    const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';
    console.log(viewport);
    if(viewport == 'mobile')
    {
        options.pages = {
            signIn: '/auth/mobile/signin',
        }
    }else{
        options.pages = {
            signIn: '/auth/desktop/signin',
        }
    }
    return await NextAuth(req, res, options);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    // console.log(req);
    const { device } = userAgent(req)
    const viewport = device.type === 'mobile' ? 'mobile' : 'desktop';
    console.log(viewport);
    if(viewport == 'mobile')
    {
        options.pages = {
            signIn: '/auth/mobile/signin',
        }
    }else{
        options.pages = {
            signIn: '/auth/desktop/signin',
        }
    }
    return await NextAuth(req, res, options);
}

// const handler = NextAuth(options);
// export {handler as GET, handler as POST}