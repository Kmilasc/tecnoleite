import logoIfood from '../../../../assets/logoIfood.png';
import logoAmazon from '../../../../assets/logoAmazon.png';
import logoNubank from '../../../../assets/logoNubank.jpg';
import { SponsorPresentation } from './components/SponsorPresentation';

export function SponsorsSection() {
    return (
        <div className="flex flex-col items-center gap-y-4">
            <div className="flex flex-col items-center">
                <span
                    className="text-lg xs:text-xl sm:text-6xl font-conforter text-black font-bold border-spacing-1 border-b-4 "
                    style={{ borderColor: '#308E96' }}
                >
                    PATROCINADORES
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
                <SponsorPresentation
                    url="https://www.ifood.com.br/"
                    logo={logoIfood}
                    alt="Logo iFood"
                    text="Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto"
                />
                <SponsorPresentation
                    url="https://www.Amazon.com.br/"
                    logo={logoAmazon}
                    alt="Logo Amazon"
                    text="Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto"
                />
                <SponsorPresentation
                    url="https://www.Nubank.com.br/"
                    logo={logoNubank}
                    alt="Logo Nubank"
                    text="Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto"
                />
            </div>
        </div>
    );
}
