interface Props {
    imageUrl: string;
    title: string;
    subtitle: string;
}

export function EventBanner({ imageUrl, title, subtitle }: Props) {
    return (
        <div id="event-banner" className="relative">
            <img className="brightness-50 w-full pr-0 mb-14 mr-0" src={imageUrl} alt="" />
            <div className="w-full capitalize text-2xl xs:text-4xl sm:text-6xl text-center font-conforter absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-extrabold border-spacing-1 p-4">
                {title}
                <br />
                <div className="text-xs xs:text-lg  sm:text-3xl font-bold whitespace-pre-wrap">{subtitle}</div>
            </div>
        </div>
    );
}
