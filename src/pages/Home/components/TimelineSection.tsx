import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ClockIcon, CalendarIcon } from '@heroicons/react/solid';
import { ReactNode } from 'react';

interface Props {
    dates: { date?: string; events: { id: number; text: string | ReactNode; link?: string }[] }[];
    lineColor: string;
}

export function TimelineSection({ dates, lineColor }: Props) {
    return (
        <div id="cronogram" className="flex flex-col">
            <div id="programacao" className="self-center pb-8">
                <span
                    className="text-2xl xs:text-4xl sm:text-6xl font-conforter text-black font-bold border-spacing-1 border-b-4 "
                    style={{ borderColor: '#308E96' }}
                >
                    PROGRAMAÇÃO
                </span>
            </div>
            <div className="flex flex-row gap-x-4 mx-8">
                <VerticalTimeline lineColor={lineColor}>
                    {dates.map(({ date = '', events }, index) => (
                        <div key={date}>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work c2"
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                date={<span className="font-bold">{date}</span>}
                                iconStyle={{
                                    background: lineColor,
                                    color: '#fff',
                                }}
                                icon={<CalendarIcon />}
                                style={{
                                    fontWeight: 'bold',
                                }}
                                contentStyle={{
                                    fontWeight: 'bold',
                                    color: '#308E96',
                                    background: '#fff',
                                    padding: 0,
                                    marginTop: index === 0 ? 0 : 120,
                                    marginBottom: 60,
                                }}
                            />
                            {events.map(({ id, text, link }) => (
                                <VerticalTimelineElement
                                    key={date + id}
                                    className="vertical-timeline-element--work c2"
                                    iconStyle={{
                                        background: lineColor,
                                        color: '#fff',
                                    }}
                                    icon={<ClockIcon />}
                                    contentStyle={{ background: '#f2f2f2' }}
                                >
                                    {link ? (
                                        <a href={link}>
                                            <p style={{ margin: 0 }}>{text}</p>
                                        </a>
                                    ) : (
                                        <p style={{ margin: 0 }}>{text}</p>
                                    )}
                                </VerticalTimelineElement>
                            ))}
                        </div>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
}
