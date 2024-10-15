import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.headers.get('authorization')?.replace('Bearer ', ''); 

  if (!token) {
    return NextResponse.redirect(new URL('/logIn', request.url));
  }
  try {
  } catch (error) {
    return NextResponse.redirect(new URL('/logIn', request.url));
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: '/home/:path*',
};
