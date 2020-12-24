import Image from 'next/image'

const Header: React.FC = () => {
    return (
     <header className="flex justify-center md:justify-between py-2 md:py-4 items-center">
         <Image src="/img/logo.svg" alt="logo" width={150} height={33}/>

         <nav className="hidden md:block">
             <a>Next.js</a>
             <a>Tailwind</a>
             <a>Fromer Motion</a>
         </nav>
     </header>
    )
  }
  
  export default Header