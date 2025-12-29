import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className="main-container inner">
            <Link href="/">
                <Image src="/assets/logo.png" alt="Logo" width={132} height={40} />
            </Link>

            <nav>
                <Link href="/">Home</Link>
                <p>Search Modal</p>
                <Link href="/coins">Coins</Link>
            </nav>
        </header>
    );
};

export default Header;
