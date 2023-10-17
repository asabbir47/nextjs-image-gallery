'use client'

import React, { useRef } from 'react'
import {signIn} from 'next-auth/react'
import { useSearchParams } from 'next/navigation';

export default function Form() {

  const userName = useRef("");
  const pass = useRef("");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const onSubmit = async (e) => {

    e.preventDefault();
    console.log(userName.current);
    
    const result = await signIn("credentials",{
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: callbackUrl
    });

    console.log(result);
    
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input onChange={(e) => (userName.current = e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="DWFERTHJY"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input onChange={(e) => (pass.current = e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
