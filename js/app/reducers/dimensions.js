var calculateDimensions =function(){
    const WH = window.innerHeight;
    const WW = window.innerWidth;
    const AtomChooserHeight = 124;
    const sidebarWidth = 250 + 7;
    return {
        contentPanelHeight: (WH - AtomChooserHeight) + "px",
        contentPanelWidth: (WW - sidebarWidth) + "px"
    };
}

export default function dimensions(state= calculateDimensions(), action){
    switch (action.type) {
        case "RESIZE":
            return calculateDimensions();
        default:
            return state;
    }
};
