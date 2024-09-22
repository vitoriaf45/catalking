import { format } from 'date-fns'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { ContactType } from '@/modules/mock/contact'

export function ContactItem({
    name,
    imageUrl,
    lastMessage,
    notRead,
}: ContactType) {
    return (
        <div className="border-b w-full h-[72px] px-4 py-3 justify-start items-center gap-4 inline-flex">
            <Avatar>
                <AvatarImage src={imageUrl} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                <div className="self-stretch justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 text-[#011627] text-base font-semibold font-['Inter'] leading-tight">
                        {name}
                    </div>
                    <div className="text-[#707991] text-xs font-normal font-['Inter'] leading-none">
                        {format(lastMessage.sendAt, 'HH:mm')}
                    </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                    <div className="text-[#707991] text-sm font-normal font-['Inter'] leading-[18px]">
                        {lastMessage.message}
                    </div>
                    <div className="w-[18px] h-[18px] bg-[#78e378] rounded-[100px] flex-col justify-center items-center inline-flex">
                        <div className="w-4 h-4 text-center text-white text-xs font-normal font-['Inter'] leading-none">
                            {notRead}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
