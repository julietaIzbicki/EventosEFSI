import { NextResponse } from 'next/server';

export function middleware(request) {
  /*const token = request.headers.get('authorization')?.replace('Bearer ', ''); 
  console.log('token2',token)
  if (!token) {
    return NextResponse.redirect(new URL('/logIn', request.url));
  }
  try {
  } catch (error) {
    console.log('token2',token)
    return NextResponse.redirect(new URL('/logIn', request.url));
  }

  return NextResponse.next(); */
  const token = request.headers.get('authorization')?.replace('Bearer ', ''); 

  if (request.nextUrl.pathname.startsWith('/home')) {
    if (!token) {
      return NextResponse.redirect(new URL('/logIn', request.url));    
    }
  }
  
}

export const config = {
  //matcher: '/home/:path*',
};
