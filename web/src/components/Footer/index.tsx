import { useRouter } from 'next/router';
import Link from 'next/link';
import style from '../Navigation/navigation.module.css';


export default function Footer() {
  const { locale, pathname } = useRouter();

  return (
    <footer className={`footer-container p-8`}>
          <div style={{gridArea: 'navigation'}} className='md:flex flex-col text-white gap-y-2 hidden'>
            <Link href="/career" className="no-underline leading-none nav-link w-min">
              <span className="text-xl text-[#fff] hover:text-[#fff]">Jobb hos oss</span>
            </Link>
            <Link href="/staffmanual" className="no-underline leading-none nav-link w-min">
              <span className="text-xl text-[#fff] hover:text-[#fff]">Håndboka</span>
            </Link>
            <Link href="/people" className="no-underline leading-none nav-link w-min">
              <span className="text-xl text-[#fff] hover:text-[#fff]">Menneskene</span>
            </Link>
            <Link href="/projects" className="no-underline leading-none nav-link w-min">
              <span className="text-xl text-[#fff] hover:text-[#fff]">Prosjektene</span>
            </Link>
            <Link href="https://blog.kodeworks.no/" className="no-underline leading-none nav-link w-min">
              <span className="text-xl text-[#fff] hover:text-[#fff]">Blogg</span>
            </Link>
          </div>
          <div style={{gridArea: 'logo'}} className='flex justify-end'>
            <img 
            style={{height: '100px', aspectRatio: '9/16'}}
            src="/static/KW_symbol_green.svg" alt="" />
          </div>
          <div style={{gridArea: 'contact'}} className='flex flex-col md:flex-row gap-x-20 gap-y-10' >
            <div className='flex flex-col'>
              <span className='text-[#B6FF9E]'>Kontakt oss</span>
              <span>
                post@kodeworks.no
                <br />
                +47 416 70 269‬
              </span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[#B6FF9E]'>Oslo</span>
              <span>
                Grønnegata 10
                <br />
                0350 Oslo
              </span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[#B6FF9E]'>Trondheim</span>
              <span>
                Fjordgata 30
                <br />
                7010 Trondheim
              </span>
            </div>
          </div>
          <div style={{gridArea: 'other'}} className='flex flex-col'>
            <ul className={`list-plain ${style['menu-list-languages']}`}>
              <li>
                <Link href={pathname} locale="no">
                  <div className='text-[#fff] hover:text-[#fff]'>Norsk</div>
                </Link>
              </li>
              <li>
                <Link href={pathname} locale="en">
                  <div className='text-[#fff] hover:text-[#fff]'>English</div>
                </Link>
              </li>
            </ul>
            <Link href="/legal/privacy" className="no-underline leading-none nav-link">
              <span className="text-[#B6FF9E] hover:text-[#B6FF9E]">Personvernerklæring</span>
            </Link>
          </div>
        </footer>
  );
}