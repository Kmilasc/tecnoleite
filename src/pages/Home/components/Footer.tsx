import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { navigation } from './Menu';

export function Footer() {
    return (
        <footer className="bg-gray-50 mt-12" aria-labelledby="footer-heading">
            <div className="w-full px-8">
                <div className="border-t border-gray-200 py-8">
                    <div className="flex justify-around md:flex-row flex-wrap">
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 text-gray-700">Endereço</h2>
                            <div className="flex items-center space-x-2 text-base font-medium text-gray-500">
                                <MdLocationOn />
                                <span>123 Main St, Anytown, USA</span>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 text-gray-700">Contato</h2>
                            <a
                                href="mailto:email@example.com"
                                className="flex items-center space-x-2 text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                <MdEmail />
                                <span>email@example.com</span>
                            </a>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 text-gray-700">Siga-nos</h2>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.instagram.com/your_username"
                                    className="flex items-center space-x-2 text-base font-medium text-gray-500 hover:text-gray-900"
                                >
                                    <AiFillInstagram />
                                    <span>Instagram</span>
                                </a>
                                <a
                                    href="https://www.facebook.com/your_username"
                                    className="flex items-center space-x-2 text-base font-medium text-gray-500 hover:text-gray-900"
                                >
                                    <AiFillFacebook />
                                    <span>Facebook</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <nav className="mt-8 flex justify-center space-x-5">
                        {navigation.map((item, itemIdx) => (
                            <a
                                key={itemIdx}
                                href={item.href}
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
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
