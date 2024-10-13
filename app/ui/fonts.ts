
import { Inter, Lusitana,Alegreya, Poppins } from 'next/font/google';
export const alegreya = Alegreya({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });
export const poppins = Poppins({
    weight: ['400', '600'], // Berat font yang ingin digunakan
    subsets: ['latin'],
});