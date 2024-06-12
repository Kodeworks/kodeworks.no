import { useRouter } from 'next/router';
import Link from 'next/link';
import style from '../Navigation/navigation.module.css';

export default function Footer() {
  const { locale, pathname } = useRouter();

  return (
    <footer className="footer-container p-8 mt-12">
      <div
        style={{ gridArea: 'navigation' }}
        className="md:flex flex-col text-white gap-y-2 hidden"
      >
        <Link href="/karriere" className="no-underline leading-none nav-link w-min">
          <span className="text-xl text-white hover:text-white">Jobb hos oss</span>
        </Link>
        <Link href="/handboka" className="no-underline leading-none nav-link w-min">
          <span className="text-xl text-white hover:text-white">Håndboka</span>
        </Link>
        <Link href="/eksperter" className="no-underline leading-none nav-link w-min">
          <span className="text-xl text-white hover:text-white">Menneskene</span>
        </Link>
        <Link href="/prosjekter" className="no-underline leading-none nav-link w-min">
          <span className="text-xl text-white hover:text-white">Prosjektene</span>
        </Link>
        <Link
          href="https://blog.kodeworks.no/"
          className="no-underline leading-none nav-link w-min"
        >
          <span className="text-xl text-white hover:text-white">Blogg</span>
        </Link>
      </div>
      <div style={{ gridArea: 'logo' }} className="flex justify-end">
        <img
          style={{ height: '100px', aspectRatio: '9/16' }}
          src="/static/KW_symbol_green.svg"
          alt=""
        />
      </div>
      <div style={{ gridArea: 'contact' }} className="flex flex-col md:flex-row gap-x-20 gap-y-10">
        <div className="flex flex-col">
          <span className="text-[var(--color-green)]">Kontakt oss</span>
          <span>
            post@kodeworks.no
            <br />
            +47 416 70 269‬
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[var(--color-green)]">Oslo</span>
          <span>
            Grønnegata 10
            <br />
            0350 Oslo
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[var(--color-green)]">Trondheim</span>
          <span>
            Fjordgata 30
            <br />
            7010 Trondheim
          </span>
        </div>
      </div>
      <div style={{ gridArea: 'other' }} className="flex flex-col justify-end">
        <Link href="/legal/privacy" className="no-underline leading-none nav-link">
          <span className="text-[var(--color-green)] hover:text-[var(--color-green)]">
            Personvernerklæring
          </span>
        </Link>
      </div>
    </footer>
  );
}
