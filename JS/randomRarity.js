    function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
    }
    function randomRarity() {
    var i = getRandomNumberBetween(1,1860);

    if ((i >= 850) && (i <= 1273)) {
    document.getElementById("R").innerHTML = `<b>Rare</b> <em>(roll was ${+i} out of 1860)</em>`;
    }
    else if ((i >= 1274) && (i <= 1645)) {
    document.getElementById("SR").innerHTML = `<b>Super Rare</b> <em>(roll was ${+i} out of 1860)</em>`;
    }
    else if ((i >= 1646) && (i <= 1800)) {
    document.getElementById("UR").innerHTML = `<b>Ultra Rare</b> <em>(roll was ${+i} out of 1860)</em>`;
    }
    else if ((i >= 1801) && (i <= 1860)) {
    document.getElementById("SSR").innerHTML = `<b>Secret Rare</b> <em>(roll was ${+i} out of 1860)</em>`;
    }
    else {
    document.getElementById("C").innerHTML = `<b>Common</b> <em>(roll was ${+i} out of 1860)</em>`;
    }
    }
    
    function randomRarityGuaranteed() {
    var i = getRandomNumberBetween(1,1860);

    if ((i >= 1274) && (i <= 1645)) {
    document.getElementById("GSR").innerHTML = `<b>Super Rare</b> <em>(roll was ${+i} out of 1860)</em>`;
    }
    else if ((i >= 1646) && (i <= 1800)) {
    document.getElementById("GUR").innerHTML = `<b>Ultra Rare</b> <em>(roll was ${+i} out of 1860)</em>`;
    }
    else if ((i >= 1801) && (i <= 1860)) {
    document.getElementById("GSSR").innerHTML = `<b>Secret Rare</b> <em>(roll was ${+i} out of 1860)</em>`;
    }
    else {
    document.getElementById("GR").innerHTML = `<b>Rare</b> <em>(roll was ${+i} out of 1860)</em>`;
    }
    }