export function SpeakerPresentation() {
    return (
        <div className="flex flex-col items-center gap-y-8">
            <div className="flex flex-col items-center">
                <span className="text-md xs:text-xl sm:text-2xl font-conforter text-black font-bold border-spacing-1 border-b-4 border-green-600 ">
                    Jack Hendrix
                </span>
                <p className="text-sm xs:text-md sm:text-xl text-gray-400">Palestrante 1</p>
            </div>
            <img
                src="https://static1.s123-cdn-static-a.com/uploads/2031/400_5a15a9b2d0271.jpg"
                alt="palestrante"
                className="w-60 h-60 "
            />
            <p className="text-center">
                Texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto texto texto texto texto texto
            </p>
        </div>
    );
}
