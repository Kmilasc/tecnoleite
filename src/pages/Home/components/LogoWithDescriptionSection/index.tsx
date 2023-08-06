import { SponsorPresentation } from './components/SponsorPresentation';

interface Props {
    title: string;
    items: {
        image: string;
        text: string;
        url: string;
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
                <div
                    data-resize={items.length % 4 === 0}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:data-[resize=true]:grid-cols-2 lg:data-[resize=true]:mx-52 gap-10 mt-10"
                >
                    {items.map(({ image, text, url }) => (
                        <SponsorPresentation key={image} url={url} logo={image} alt={text} text={text} />
                    ))}
                </div>
            </div>
        </div>
    );
}
