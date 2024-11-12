import { NextResponse } from 'next/server';
import { getCookie } from "cookies-next";

export function middleware(request) {
  const token = getCookie("token", {req: request})

  if (request.nextUrl.pathname.startsWith('/home')) {
    if (!token) {
      return NextResponse.redirect(new URL('/logIn', request.url));    
    }
  }
  
}

export const config = {
  
};
