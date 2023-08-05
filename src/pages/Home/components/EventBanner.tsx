interface Props {
    imageUrl: string;
    title: string;
    subtitle: string;
}

export function EventBanner({ imageUrl, title, subtitle }: Props) {
    return (
        <div id="inicio" className="relative">
            <img className="brightness-50 w-full pr-0 mb-14 mr-0" src={imageUrl} alt="" />
            <div className="w-full text-2xl xs:text-4xl sm:text-6xl text-center font-conforter absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-extrabold border-spacing-1  p-4">
                {title}
                <br />
                <div className="text-xs xs:text-lg  sm:text-3xl font-bold whitespace-pre-wrap">
                    {subtitle}
                    <br />
                    <br />
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-main-400 via-main-500 to-main-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-main-300 dark:focus:ring-main-800 font-medium rounded-lg text-xl px-8 py-3.5 text-center"
                    >
                        Inscrição
                    </button>
                </div>
            </div>
        </div>
    );
}
