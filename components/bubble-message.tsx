import { cn } from '@/lib/utils'
import { format } from 'date-fns'

export function BubbleMessage({
    message,
    sendAt,
    author,
}: {
    message: string
    sendAt: Date
    author: string
}) {
    return (
        <div
            className={cn(
                'self-stretch justify-start items-center inline-flex',
                {
                    'justify-end ': author === 'you',
                }
            )}
        >
            <div
                className={cn(
                    'px-3 py-1 bg-white rounded-xl flex-col justify-center items-end gap-1 inline-flex',
                    { 'bg-green-400': author === 'you' }
                )}
            >
                <div className="text-[#011627] text-base font-normal font-['Inter'] leading-tight">
                    {message}
                </div>
                <div className="justify-start items-center gap-1 inline-flex">
                    <div className="w-[18px] h-[18px] px-[0.06px] py-px justify-center items-center flex" />
                    <div className="text-[#011627] text-xs font-normal font-['Inter'] leading-none">
                        {format(sendAt, 'HH:mm')}
                    </div>
                    <div className="w-3.5 h-3.5 pl-[1.76px] pr-0.5 pt-[3.51px] pb-[2.92px] justify-center items-center flex" />
                </div>
            </div>
        </div>
    )
}
