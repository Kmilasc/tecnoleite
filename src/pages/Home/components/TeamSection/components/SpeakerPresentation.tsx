import { Modal } from 'flowbite-react';
import { useState } from 'react';

export interface Props {
    id: number;
    name: string;
    title: string;
    imageUrl: string;
    about: string;
}

export function SpeakerPresentation({ id, imageUrl, name, title, about }: Props) {
    const [openModal, setOpenModal] = useState<string | undefined>();

    return (
        <>
            <div
                id={`speaker-${id}`}
                aria-hidden
                onClick={() => setOpenModal('default')}
                className="flex flex-col items-center gap-y-4 p-8"
            >
                <img loading="lazy" src={imageUrl} alt="palestrante" className="w-60 h-60 rounded-full" />
                <div className="flex flex-col items-center">
                    <span
                        className="text-md xs:text-xl sm:text-2xl font-conforter text-black font-bold border-spacing-1 border-b-4 "
                        style={{ borderColor: '#308E96' }}
                    >
                        {name}
                    </span>
                    <div className="flex md:min-h-[75px] items-center">
                        <p className="text-sm xs:text-md sm:text-xl text-center text-gray-600">{title}</p>
                    </div>
                </div>
            </div>
            <Modal show={openModal === 'default'} onClose={() => setOpenModal(undefined)}>
                <Modal.Header>{name}</Modal.Header>
                <Modal.Body className="w-full">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <img
                            loading="lazy"
                            src={imageUrl}
                            alt="palestrante"
                            className="h-40 w-40 flex-1 rounded-full self-center"
                        />
                        <div className="flex flex-col gap-y-4">
                            <div className="flex flex-col items-center">
                                <div className="flex md:min-h-[75px] items-center">
                                    <p className="text-sm xs:text-md sm:text-lg text-center text-gray-600">{title}</p>
                                </div>
                            </div>
                            <p className="text-center">{about}</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
