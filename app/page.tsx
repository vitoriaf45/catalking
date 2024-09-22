import { ChatArea } from '@/components/chat-area'
import { ContactItem } from '@/components/contact-item'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable'
import { ScrollArea } from '@/components/ui/scroll-area'
import { mockContacts } from '@/modules/mock/contact'

export default function Home() {
    return (
        <main className="w-full h-screen bg-background">
            <ResizablePanelGroup
                direction="horizontal"
                className="min-h-screen  rounded-lg border "
            >
                <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
                    <ScrollArea className="h-screen">
                        {mockContacts.map((value, index) => {
                            return (
                                <ContactItem
                                    key={`${index}`}
                                    imageUrl={value.imageUrl}
                                    lastMessage={value.lastMessage}
                                    name={value.name}
                                    notRead={value.notRead}
                                />
                            )
                        })}
                    </ScrollArea>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={75}>
                    <ChatArea />
                </ResizablePanel>
            </ResizablePanelGroup>
        </main>
    )
}
