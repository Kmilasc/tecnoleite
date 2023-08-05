import { RefreshIcon, XCircleIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';

export function MapSection() {
    const [location, setLocation] = useState<null | { lat: number; lng: number }>(null);
    const [error, setError] = useState<string | null>(null);

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            positionError => {
                switch (positionError.code) {
                    case positionError.PERMISSION_DENIED:
                        setError('Permissão para acessar a localização foi negada');
                        break;
                    case positionError.POSITION_UNAVAILABLE:
                        setError('Informações de localização não estão disponíveis');
                        break;
                    case positionError.TIMEOUT:
                        setError('A solicitação para obter a localização do usuário expirou');
                        break;
                    default:
                        setError(`Erro ao obter localização: ${positionError.message}`);
                }
            },
        );
    };

    useEffect(() => {
        getLocation();
    }, []);

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center space-y-2">
                <div className="flex items-center space-x-2">
                    <XCircleIcon className="h-5 w-5 text-red-500" />
                    <div>{error}</div>
                </div>
                <button
                    onClick={getLocation}
                    className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-400"
                    type="button"
                >
                    <RefreshIcon className="h-5 w-5 text-white inline" />
                    <span className="ml-2">Tentar novamente</span>
                </button>
            </div>
        );
    }

    if (!location) {
        return (
            <div className="flex justify-center items-center space-x-2">
                <RefreshIcon className="animate-spin h-5 w-5 text-blue-500" />
                <div>Obtendo localização...</div>
            </div>
        );
    }

    // src={`https://www.google.com.br/maps/dir/${location.lat},+${location.lng}/UTFPR+-+Dois+Vizinhos+Estr.+p%2F+Boa+Esperança,+km+04+-+Zona+Rural+Dois+Vizinhos+-+PR+85660-000/@-25.7046501,-53.0976178,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94f048f00dd26185:0x3965e767d865130a!2m2!1d-53.0976178!2d-25.7046501?entry=ttu`}

    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20334.689126753296!2d-53.10570082135573!3d-25.714383401729215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f048f00dd26185%3A0x3965e767d865130a!2sUTFPR%20-%20Dois%20Vizinhos!5e0!3m2!1spt-BR!2sbr!4v1690421117022!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    );
}
