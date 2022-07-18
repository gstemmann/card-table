import React, { useState } from "react";

const useFlips = () => {
    const [flipState, setFlipState] = useState(true);
    const flip = () => {
        setFlipState(isUp => !isUp);
    }
    return [flipState, flip];
}
export default useFlips;