import { NextResponse } from 'next/server';
import { hasCookie } from 'cookies-next';

export function middleware(request) {
  //const token = hasCookie('token', { req: request });
  const token  = request.cookies.get('token')?.value
  const pathname = request.nextUrl.pathname;  
  console.log(pathname)
  
  if (!token) {    
    if (!pathname.startsWith('/logIn') && !pathname.startsWith('/signIn') && pathname != '/') {      
      return NextResponse.redirect(new URL("/logIn", request.url));
    }
  }

  if (token){    
    if (pathname.startsWith('/logIn')) {      
      return NextResponse.redirect(new URL("/home", request.url));
    }
    if (pathname.startsWith('/signIn')) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ]
};