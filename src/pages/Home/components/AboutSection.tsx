interface Props {
    title: string;
    text: string;
    imageUrl: string;
}

export function AboutSection({ title, text, imageUrl }: Props) {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10" id="about-section">
            <div className="col-span-2">
                <div className="flex-1 w-full text-2xl xs:text-4xl sm:text-6xl font-conforter text-black font-bold border-spacing-1 text-center xl:text-start xl:self-center">
                    <span className="border-b-4 " style={{ borderColor: '#308E96' }}>
                        {title}
                    </span>
                    <p className="text-xl font-normal mt-8 flex-1">{text}</p>
                </div>
            </div>
            <img
                className="flex-1 place-self-center w-96 lg:w-[600px] xl:w-full max-w-[330px] drop-shadow-lg"
                src={imageUrl}
                alt="ilustration"
            />
        </div>
    );
}
