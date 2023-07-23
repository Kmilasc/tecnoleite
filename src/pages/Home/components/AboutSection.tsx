interface Props {
    title: string;
    text: string;
    imageUrl: string;
}

export function AboutSection({ title, text, imageUrl }: Props) {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div className="flex-1 w-full text-2xl xs:text-4xl sm:text-6xl font-conforter text-black font-bold border-spacing-1">
                <span className="border-b-4 border-green-600 ">{title}</span>
                <p className="text-xl font-normal mt-8 flex-1">{text}</p>
            </div>
            <img
                className="flex-1 float-right w-96 lg:w-[600px] xl:w-full drop-shadow-lg place-self-center"
                src={imageUrl}
                alt="ilustration"
            />
        </div>
    );
}
