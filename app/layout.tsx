// import '@/app/ui/global.css';
// import { inter } from '@/app/ui/fonts';
// import { Metadata } from 'next';


// export default function RootLayout({ children, }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} antialiased`}>{children}</body>
//     </html>
//   );
// }

// export const metadata: Metadata = {
//   title: {
//     template: '%s | sikomay',
//     default: 'sikomay',
//   },
//   description: 'The official Next.js Learn Dashboard built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

// app/layout.tsx
'use client';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { Provider } from 'react-redux';
import store from './stores'; // Adjust this path as necessary
// export const metadata: Metadata = {
//   title: {
//     template: '%s | sikomay',
//     default: 'sikomay',
//   },
//   description: 'The official Next.js Learn Dashboard built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          {children}
        </body>
      </html>
    </Provider>
  );
}

// export const metadata: Metadata = {
//   title: {
//     template: '%s | sikomay',
//     default: 'sikomay',
//   },
//   description: 'The official Next.js Learn Dashboard built with App Router.',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };
