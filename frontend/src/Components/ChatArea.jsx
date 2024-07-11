import Message from './Message'
import MessageInput from './MessageInput'
import WithAuthentication from '../utils/withAuthenticatiion'

// eslint-disable-next-line react-refresh/only-export-components
function ChatArea() {
    return (
        <div className='chat-area'>
            <div className='chat-header'></div>
            <div className='messages'>
                <Message text="Hey, how's it going" sent />
                <Message text="I am good" received />
            </div>



            <MessageInput />
        </div>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
// export default WithAuthentication(ChatArea)
export default ChatArea
