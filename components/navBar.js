import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/panda.png" width={110} height={90}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/food"><a>Food</a></Link>
        </nav>
    );
}
 
export default NavBar;