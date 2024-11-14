import { useState } from "react";
import eosOscKeys from "../eosOscKeys";

function CommandBar() {
    let [osc, setOsc] = useState("");

    document.addEventListener('keypress', (e) => {
        let pressed = e.key;

        if ('0123456789'.includes(pressed)) {
            setOsc(`/eos/key/${pressed}`);
            return;
        };
    });

    return (
        <div className="absolute w-[98vw] h-10 border-eos-yellow border-[3px] rounded-md px-2 flex items-center self-end">
            <p id="command-bar" className="text-eos-yellow font-bold text-xl">LIVE: {osc}</p>
        </div>
    )
};

export default CommandBar;