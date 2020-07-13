
function getRegionalColorCases(d) {
    return d > 1000 ? '#016c59' :
    d > 100 ? '#1c9099' :
    d > 99 ? '#1c9099' :
    d > 50 ? '#67a9cf' :
    d > 49 ? '#67a9cf' :
    d > 1 ? '#bdc9e1' :
    d > 0.1 ? '#bdc9e1' :
    d > 0 ? '#ffffff' :
    d > -1 ? '#ffffff' :
    '#808080';
}

function getRegionalPopulationColorCases(d) {
    return d > 500 ? '#993404' :
        d > 499 ? '#993404' :
        d > 100 ? '#d95f0e' :
        d > 99 ? '#d95f0e' :
        d > 50 ? '#fe9929' :
        d > 49 ? '#fe9929' :
        d > 10 ? '#fed98e' :
        d > 9 ? '#fed98e' :
        d > 1 ? '#ffffd4' :
        d > 0 ? '#ffffd4' :
        '#808080';
}

function getRegionalColordeaths(d) {
    return d > 50 ? '#006837' :
        d > 49 ? '#006837' :
        d > 30 ? '#31a354' :
        d > 29 ? '#31a354' :
        d > 20 ? '#78c679' :
        d > 19 ? '#78c679' :
        d > 10 ? '#c2e699' :
        d > 9 ? '#c2e699' :
        d > 0 ? '#ffffcc' :
        d > -1 ? '#ffffcc' :
        d > null ? '#808080' :
        '#808080';
}

