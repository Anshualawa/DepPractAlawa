import { useRef, useState, useEffect, useCallback } from "react"


export default function PasswordGeneratorCom() {
    const [password, setPassword] = useState("")
    const [langth, setLangth] = useState(8)
    const [charAllow, setCharAllow] = useState(false)
    const [numberAllow, setNumberAllow] = useState(false)

    const passworRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
        if (numberAllow) str += "1234567890"
        if (charAllow) str += "~!@#$%^&*<>?"

        for (let i = 1; i <= langth; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)
    }, [langth, charAllow, numberAllow, setPassword])

    const copyPasswordToClipboard = useCallback(() => {
        passworRef.current?.select();
        passworRef.current?.setSelectionRange(0, 20);
        window.navigator.clipboard.writeText(password);
    }, [password])

    useEffect(() => {
        passwordGenerator()
    }, [langth, charAllow, numberAllow, passwordGenerator])
    return (
        <>
            <div className="mx-auto w-full bg-black">
                <section className="mx-auto h-screen w-full">
                    <div className="w-full">
                        <h1 className="my-5 text-center text-2xl font-bold uppercase text-white">Password Generator</h1>
                        <div className="mx-auto flex w-3/5 flex-wrap items-center justify-center bg-gray-800 py-5">
                            <input type="text" value={password} ref={passworRef} className="flex-shrink bg-gray-200 px-2 py-2 text-xl outline-none" readOnly />
                            <button onClick={() => copyPasswordToClipboard()} className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 px-2 py-2 text-xl text-white">Copy</button>
                        </div>
                        <div className="mx-auto w-3/5">
                            <div className="mx-auto border flex flex-wrap items-center justify-center gap-4 text-white capitalize">
                                <div className="flex items-center justify-center gap-x-1">
                                    <input
                                        type="range"
                                        min={6}
                                        max={20}
                                        value={langth}
                                        className="cursor-pointer"
                                        onChange={(e) => { setLangth(e.target.value) }} />
                                    <label className="text-white">Length({langth})</label>
                                </div>
                                <div className="flex items-center justify-center gap-x-1">
                                    <input type="checkbox" defaultChecked={numberAllow}
                                        onChange={() => setNumberAllow((prev) => !prev)} />
                                    <label>number</label>
                                </div>
                                <div className="flex items-center justify-center gap-x-1">
                                    <input type="checkbox" defaultChecked={charAllow}
                                        onChange={() => setCharAllow((prev) => !prev)} />
                                    <label>Charactore</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </>
    )
}

