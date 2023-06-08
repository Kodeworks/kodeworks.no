import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KodeWorks',
  description:
    'We commit ourselves to delivering good solutions and value in collaboration with our clients, and strive each day to create an invigorating and giving workplace.',
  themeColor: '#b7ff9f',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
