import { SpeakerPresentation, Props as SpeakerPresentationProps } from './components/SpeakerPresentation';

interface ISpeakers extends SpeakerPresentationProps {
    id: number;
}

interface Props {
    speakers: ISpeakers[];
}

export function TeamSection({ speakers }: Props) {
    return (
        <div className="flex flex-col gap-y-10">
            <h4 className="text-2xl xs:text-4xl sm:text-6xl font-conforter text-black font-bold border-spacing-1 border-b-4 border-green-600 self-center">
                EQUIPE
            </h4>
            <div className="flex flex-col sm:grid sm:auto-cols-max sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 mx-8">
                {speakers.map(({ id, name, title, imageUrl, about }) => (
                    <SpeakerPresentation key={id} name={name} title={title} imageUrl={imageUrl} about={about} />
                ))}
            </div>
        </div>
    );
}
