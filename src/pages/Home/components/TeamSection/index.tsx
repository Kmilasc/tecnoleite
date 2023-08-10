import { SpeakerPresentation, Props as SpeakerPresentationProps } from './components/SpeakerPresentation';

interface ISpeakers extends SpeakerPresentationProps {
    id: number;
}

interface Props {
    speakers: ISpeakers[];
}

export function TeamSection({ speakers }: Props) {
    return (
        <div id="team" className="flex flex-col gap-y-10">
            <div className="flex flex-col items-center">
                <h4
                    className="text-2xl xs:text-4xl sm:text-6xl font-conforter text-black font-bold border-spacing-1 border-b-4"
                    style={{ borderColor: '#308E96' }}
                >
                    PALESTRANTES
                </h4>
            </div>
            <div className="flex flex-col lg:grid lg:auto-cols-max lg:grid-cols-2 gap-4">
                {speakers.map(({ id, name, title, imageUrl, about }) => (
                    <SpeakerPresentation key={id} name={name} title={title} imageUrl={imageUrl} about={about} />
                ))}
            </div>
        </div>
    );
}
