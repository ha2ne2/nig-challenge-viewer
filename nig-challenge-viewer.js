const CHALLENGE_NUM = 8;

// clearedChallenges is Map
function createChallengeTable(clearedChallenges) {
    var table = [];
    var max = 1 << 8;
    for (var i = 1; i < max; i++){
        var row = convertArrayToDisplayData(convertDecimalToBinary(i, CHALLENGE_NUM));
        row['id'] = i;
        row['cleared'] = clearedChallenges.has(i);
        table.push(row);
    }

    return table;
}

// convertDecimalToBinary(6,5) => [false,false,true,true,false]
function convertDecimalToBinary(n, numOfDigits) {
    var result =[];
    while(n > 0){
        result.push(n % 2 == 1);
        n = Math.floor(n/2);
    }
    while (result.length < numOfDigits){
        result.push(false);
    }
    result.reverse();
    return result;
}

// convertArrayToDisplayData([false,true,false]) => {c1:'',c2:'O',c3:''}
function convertArrayToDisplayData(arry){
    var result = {};
    var len = arry.length;
    for(var i = 0; i < len; i++){
        result['c'+(i+1)] = arry[i] ? 'O': '';
    }
    return result;
}
