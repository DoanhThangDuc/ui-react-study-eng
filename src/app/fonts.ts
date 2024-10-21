import { Roboto , Montserrat} from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
});
