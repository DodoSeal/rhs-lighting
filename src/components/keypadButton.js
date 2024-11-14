function KeypadButton(props) {
    return (
        <input className={`${props.width || "w-24"} h-14 rounded-lg border-eos-gray-100 text-white cursor-pointer ${props.color || "bg-eos-gray-200"} border-[3px] text-eos-gray m-1 font-bold ${props.textSize || "text-2xl"} hover:bg-opacity-75 transition-all duration-75`} type="button" value={props.value}></input>
    );
};

export default KeypadButton;