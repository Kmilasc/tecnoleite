const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre', href: '#about-section' },
    { name: 'Cronograma', href: '#programacao' },
    { name: 'Equipe', href: '#equipe' },
];

export function Footer() {
    return (
        <footer className=" bg-gray-50 mt-12" aria-labelledby="footer-heading">
            <div className="w-full">
                <div className="border-t border-gray-200 py-8">
                    <nav className="flex space-x-5 justify-center">
                        {navigation.map((item, itemIdx) => (
                            <a
                                key={itemIdx}
                                href={item.href}
                                className="text-base font-medium  text-c2 hover:text-c1"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}
