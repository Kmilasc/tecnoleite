export interface Props {
    name: string;
    title: string;
    imageUrl: string;
    about: string;
}

export function SpeakerPresentation({ imageUrl, name, title, about }: Props) {
    return (
        <div className="flex flex-col items-center gap-y-4">
            <div className="flex flex-col items-center">
                <span className="text-md xs:text-xl sm:text-2xl font-conforter text-black font-bold border-spacing-1 border-b-4 " style={{borderColor: '#308E96' }}>
                    {name}
                </span>
                <p className="text-sm xs:text-md sm:text-xl text-gray-400">{title}</p>
            </div>
            <img src={imageUrl} alt="palestrante" className="w-60" />
            <p className="text-center">{about}</p>
        </div>
    );
}
