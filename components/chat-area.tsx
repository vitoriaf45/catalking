import { mockMessages } from '@/modules/mock/messages'
import { BubbleMessage } from './bubble-message'

export function ChatArea() {
    return (
        <div className="w-full h-screen p-6 bg-background flex-col justify-start items-center gap-6 inline-flex">
            <div className="self-stretch justify-center items-center inline-flex">
                <div className="px-3 py-1 bg-[#3d70b8]/60 rounded-xl flex-col justify-center items-end gap-1 inline-flex">
                    <div className="text-white text-base font-normal font-['Inter'] leading-tight">
                        Today
                    </div>
                </div>
            </div>

            {mockMessages.map((message, index) => {
                return (
                    <BubbleMessage
                        author={message.author}
                        message={message.message}
                        sendAt={message.sendAt}
                    />
                )
            })}
        </div>
    )
}
