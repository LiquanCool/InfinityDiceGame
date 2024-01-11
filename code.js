let total = 0;
let rolls = 0;
let highest = 0;
let points = 0;
let arr = []
let mean = 0;
let median = 0;
let mode = 0;
function roll()
{
    let current  = Math.round(1/Math.random());
    console.log(current)
    if(current>highest)
    {
        highest = current;
    }
    arr.push(current);
    total+=current;
    rolls++;
    points++;
    mean=total/rolls;
    median=findMedian(arr);
    modeArr=modeArray(arr);
    document.getElementById('current').textContent = "You just rolled a  " + current;
    document.getElementById('highest').textContent = "Your Highest Roll is: " + highest + ". That is a one in " + highest + " chance!";
    document.getElementById('rolls').textContent = "Rolls: " + rolls;
    document.getElementById('points').textContent = "Points: " + points;
    document.getElementById('mean').textContent = "Mean: " + mean;
    document.getElementById('median').textContent = "Median: " + median;
    console.log(arr);
}

function findModes(info)
{
    
}





function modeArray(values)
{
    mapping = {};
    counter = 0
    for(var i = 0;i < values.length; i++){
    if (!mapping[values[i]]) mapping[values[i]] = 0;
    mapping[values[i]] += 1
    }
    return mapping;
}

//modeArray method from
//https://stackoverflow.com/questions/26079183/finding-mode-in-javascript

function findMedian(numbers) {
    const sorted = Array.from(numbers).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle];
  }
//findMedian method from
//https://stackoverflow.com/questions/45309447/calculating-median-javascript