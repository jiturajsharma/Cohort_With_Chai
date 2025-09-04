import { useState, useRef, useEffect } from "react";
// import generate from "../assets/generate.png"; // Make sure the image exists
import { getPiyushSirChat } from "../generative/Piyushsir";

function PiyushSir() {
    const [input, setInput] = useState("");
    const [mes, setMes] = useState([]);
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Scroll to bottom when new message added
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [mes]);

    async function PResponse() {
        if (!input.trim()) return;

        setLoading(true);
        try {
            const res = await getPiyushSirChat(input);
            setMes(prev => [...prev, { user: input, model: res }]);
            setInput("");
        } catch (error) {
            setMes(prev => [...prev, { user: input, model: "Kuch error aa gaya bhai, try again!" }]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="h-[90vh] bg-gray-800 flex flex-col gap-y-[10px] pb-[10px]">
            {/* Message Area */}
            <div className="h-[85%] px-[250px] flex flex-col gap-y-[20px] my-[10px] overflow-y-auto">
                {mes.map((m, idx) => (
                    <div key={idx} className="flex flex-col gap-y-[20px] leading-[1.75]">
                        {/* User message */}
                        <div className="max-w-[60%] self-end bg-gray-100/10 text-white px-[21px] py-[7px] rounded-[25px]">
                            {m.user}
                        </div>
                        {/* Piyush Sir reply */}
                        <div className="max-w-[60%] bg-white/10 text-white px-[14px] py-[7px] rounded-[25px]">
                            {m.model}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef}></div>
            </div>

            {/* Input Area */}
            <div className="h-[15%] px-[250px] flex gap-x-[10px]">
                <div className="h-full w-full flex justify-between items-center bg-white/10 px-[50px] rounded-2xl overflow-hidden">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        className="text-lg border-none outline-none w-[85%] bg-transparent text-white"
                        placeholder="Ask Piyush Garg"
                        onKeyDown={(e) => e.key === "Enter" && PResponse()}
                    />
                    <button onClick={PResponse} disabled={loading}>
                        <img src={generate} alt="send" className="h-[35px]" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PiyushSir;
