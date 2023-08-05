import { AiFillInstagram } from 'react-icons/ai';
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
                                <span>UTFPR - Dois Vizinhos, Estr. p/ Boa Esperança, km 04 - Zona Rural</span>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 text-gray-700">Contato</h2>
                            <a
                                href="mailto:petproducaoleiteirautfpr@gmail.com"
                                className="flex items-center space-x-2 text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                <MdEmail />
                                <span>petproducaoleiteirautfpr@gmail.com</span>
                            </a>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-2 text-gray-700">Siga-nos</h2>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.instagram.com/tecno_leite"
                                    className="flex items-center space-x-2 text-base font-medium text-gray-500 hover:text-gray-900"
                                >
                                    <AiFillInstagram />
                                    <span>Tecno Leite</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/petproducaoleiteira "
                                    className="flex items-center space-x-2 text-base font-medium text-gray-500 hover:text-gray-900"
                                >
                                    <AiFillInstagram />
                                    <span>PET</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <nav className="mt-8 flex justify-center space-x-5 items-center">
                        {navigation.map(({ href, name, special }) => (
                            <a
                                data-special={special}
                                key={name}
                                href={href}
                                className="text-base data-[special=true]:text-center font-medium text-gray-500 hover:text-gray-900"
                            >
                                {special ? (
                                    <button
                                        type="button"
                                        className="text-white bg-gradient-to-r from-main-400 via-main-500 to-main-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-main-300 dark:focus:ring-main-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        {name}
                                    </button>
                                ) : (
                                    name
                                )}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}
