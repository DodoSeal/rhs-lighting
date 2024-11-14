import KeypadButton from "./keypadButton";

function Keypad() {
    return (
        <div className="absolute w-[98vw] h-72 border-eos-yellow border-[3px] rounded-lg self-end mb-14 flex">
            <div className="w-[37.5%] h-full p-4 flex flex-wrap items-center justify-center">
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 1" />
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 2" />
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 3" />
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 4" />
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 5" />
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 6" />
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 7" />
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 8" />
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 9" />
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 10" />
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 11" />
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 12" />
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 13" />
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 14" />
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 15" />
                <KeypadButton color="bg-eos-gray-300" textSize="text-sm" value="Group 16" />
            </div>
            <div className="w-[25%] h-full p-4 flex flex-wrap place-content-center">
                <KeypadButton value="1" />
                <KeypadButton value="2" />
                <KeypadButton value="3" />
                <KeypadButton value="4" />
                <KeypadButton value="5" />
                <KeypadButton value="6" />
                <KeypadButton value="7" />
                <KeypadButton value="8" />
                <KeypadButton value="9" />
                <KeypadButton color="bg-eos-gray-300" value="Clear" />
                <KeypadButton value="0" />
                <KeypadButton color="bg-eos-gray-300" value="." />
            </div>
            <div className="w-[37.5%] h-full p-4 flex flex-wrap items-center justify-center">
                <KeypadButton color="bg-eos-gray-300" value="Thru" />
                <KeypadButton color="bg-eos-gray-300" value="Full" />
                <KeypadButton color="bg-eos-gray-300" value="Time" />
                <KeypadButton color="bg-eos-gray-300" value="Delay" />
                <KeypadButton color="bg-eos-gray-300" value="Home" />
                <KeypadButton color="bg-eos-gray-300" value="Out" />
                <KeypadButton color="bg-eos-gray-300" value="Group" />
                <KeypadButton color="bg-eos-gray-300" value="Sub" />
                <KeypadButton color="bg-eos-gray-300" value="At" />
                <KeypadButton color="bg-eos-gray-300" value="Cue" />
                <KeypadButton color="bg-eos-gray-300" value="Effect" />
                <KeypadButton color="bg-eos-gray-300" value="Park" />
                <KeypadButton value="Enter" width="w-[12.5rem]" />
                <KeypadButton color="bg-eos-gray-300" value="Last" />
                <KeypadButton color="bg-eos-gray-300" value="Next" />
            </div>
        </div>
    );
};

export default Keypad;