import "./css/style.css";

// import { Montserrat, Nunito } from 'next/font/google'

// const Montserrat = Montserrat({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap'
// })

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   variable: '--font-playfair-display',
//   display: 'swap'
// })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-inter antialiased  `}>{children}</body>
    </html>
  );
}
