
function getRegionalColorCases(d) {
    return d > 500 ? '#016c59' :
    d > 499 ? '#016c59' :
    d > 100 ? '#1c9099' :
    d > 99 ? '#1c9099' :
    d > 50 ? '#67a9cf' :
    d > 49 ? '#67a9cf' :
    d > 1 ? '#bdc9e1' :
    d > 0.9 ? '#bdc9e1' :
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
    return d > 100 ? '#006837' :
        d > 99 ? '#006837' :
        d > 50 ? '#31a354' :
        d > 49 ? '#31a354' :
        d > 10 ? '#78c679' :
        d > 9 ? '#78c679' :
        d > 1 ? '#c2e699' :
        d > 0.5 ? '#c2e699' :
        d > 0 ? '#ffffcc' :
        d > -1 ? '#ffffcc' :
        '#808080';
}

