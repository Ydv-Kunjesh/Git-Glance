import Link from 'next/link';

const Header = () => {
    return (
        <header className=" border-gray-700 bg-gray-900 px-3 py-3">
            <div className="mx-auto flex max-w-screen-xl items-center">
                <Link href="/" className="text-gradient text-xl font-bold">
                    Git Glance
                </Link>
            
            </div>
        </header>
    );
};

export default Header;
