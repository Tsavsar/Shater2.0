import localFont  from 'next/font/local';

export const mena = localFont({
  src: './fonts/Mena Grotesk Regular.woff2',
  display: 'swap',
  variable: '--font-mena'
})

export const p22 = localFont({
  src: './fonts/Fontspring-DEMO-P22MackinacProBook.woff',
  display: 'swap',
  variable: '--font-p22'
})

export const p22800 = localFont({
  src: './fonts/Mena Grotesk Black.woff2',
  display: 'swap',
  variable: '--font-p22800'
})

export const satoshi = localFont({
  src: './fonts/Satoshi-Regular.woff2',
  display: 'swap',
  variable: '--font-satoshi' 
});

export const satoshiBold = localFont({
  src: './fonts/Satoshi-Bold.woff2',
  display: 'swap',
  variable: '--font-satoshi-bold' 
});