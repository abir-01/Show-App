const initialState = ""

const addsongs = (state = initialState, action) => {
    switch (action.type) {
        case "ADDSONGS":            
            state = action.arr;
            return state
        

        default: return state
    }
}

export default addsongs;