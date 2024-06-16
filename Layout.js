import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Badminton Tournament Manager</h1>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/organisations">Organisations</Link></li>
                        <li><Link href="/organisers">Organisers</Link></li>
                        <li><Link href="/tournaments">Tournaments</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
