interface SponsorProps {
    url: string;
    logo: string;
    alt: string;
    text: string;
}

export function SponsorPresentation({ url, logo, alt, text }: SponsorProps) {
    return (
        <div className="flex flex-col items-center gap-y-12 self-center">
            <a href={url} target="_blank" rel="noreferrer">
                <img loading="lazy" src={logo} alt={alt} />
            </a>
            <p className="text-xl font-normal flex-1 text-center">{text}</p>
        </div>
    );
}
