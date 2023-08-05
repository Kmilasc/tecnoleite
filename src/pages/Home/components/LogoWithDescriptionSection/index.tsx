import { SponsorPresentation } from './components/SponsorPresentation';

interface Props {
    title: string;
    items: {
        image: string;
        text: string;
    }[];
}

export function LogoWithDescriptionSection({ title, items }: Props) {
    return (
        <div className="flex flex-col items-center gap-y-4">
            <div className="flex flex-col items-center">
                <span
                    className="text-lg xs:text-xl sm:text-6xl font-conforter text-black font-bold border-spacing-1 border-b-4 "
                    style={{ borderColor: '#308E96' }}
                >
                    {title}
                </span>
            </div>
            <div className="max-w-[1000px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
                    {items.map(({ image, text }) => (
                        <SponsorPresentation
                            url="https://www.ifood.com.br/"
                            logo={image}
                            alt="Logo iFood"
                            text={text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
