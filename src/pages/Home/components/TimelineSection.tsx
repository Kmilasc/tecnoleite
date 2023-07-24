import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ClockIcon } from '@heroicons/react/solid';

interface Props {
    events: { id: number; date: string; text: string }[];
    lineColor: string;
}

export function TimelineSection({ events, lineColor }: Props) {
    return (
        <div className="flex flex-col">
            <div className="self-center pb-8">
                <span className="text-2xl xs:text-4xl sm:text-6xl font-conforter text-black font-bold border-spacing-1 border-b-4 " style={{borderColor: '#308E96' }}>
                    CRONOGRAMA
                </span>
            </div>
            <div className="flex flex-row gap-x-4 mx-8">
                <VerticalTimeline lineColor={lineColor}>
                    {events.map(({ id, date, text }) => (
                        <VerticalTimelineElement
                            key={id}
                            className="vertical-timeline-element--work c2"
                            
                            date={date}
                            iconStyle={{
                                background: lineColor,
                                color: '#fff',
                            }}
                            icon={<ClockIcon  />}
                            contentStyle={{ background: '#f2f2f2' }}
                        >
                            <h3 className="vertical-timeline-element-title" >{date}</h3>
                            <p>{text}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
}