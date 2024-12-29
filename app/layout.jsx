import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
const ArabicUI = localFont({ src: './fonts/DG-Gaza.ttf' })
const ArabicUI2 = localFont({ src: './fonts/LANTX.otf' })
const ArabicUI3 = localFont({ src: './fonts/Rubik.ttf' })
import { Anton } from 'next/font/google';

import Nav from "./components/Nav";
import Hero from "./components/Hero";

const anton = Anton({
  subsets: ['latin'], // Include the subset you need
  weight: '400',      // Adjust weight if needed (Anton only has 400)
});


import { Rakkas } from 'next/font/google';

const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: '400', // Adjust based on the font options
});

// Configure the font
const rakkas = Rakkas({
  subsets: ['latin'], // Choose the subset(s) you need
  weight: '400', // Specify the weight, if applicable
});
import { Abril_Fatface } from 'next/font/google';


export const metadata = {
  title: "My Portfolio ",
  description: `Hi, I’m Kerlos Hany, a passionate web developer specializing in Next.js. With expertise in React and Tailwind CSS, I build fast, responsive, and visually stunning web applications.

Explore my projects, dive into my coding journey, and see how I transform ideas into scalable solutions. Let’s connect and create something amazing together!`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` bg-slate-950   antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
