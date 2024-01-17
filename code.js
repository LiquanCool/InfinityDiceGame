let total = 0;
let rolls = 0;
let highest = 0;
let points = 0;
let arr = []
let mean = 0;
let median = 0;
let mode = 0;
let luck = 1;
function roll()
{
    let current  = Math.round(luck/Math.random());
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
    mode=findModes(modeArr);
    makeTable(modeArr);
    document.getElementById('current').textContent = "You just rolled a  " + current;
    document.getElementById('highest').textContent = "Your Highest Roll is: " + highest + ". That is a one in " + highest + " chance!";
    document.getElementById('rolls').textContent = "Rolls: " + rolls;
    document.getElementById('points').textContent = "Points: " + points;
    document.getElementById('mean').textContent = "Mean: " + mean;
    document.getElementById('median').textContent = "Median: " + median;
    document.getElementById('mode').textContent = "Mode: " + mode;
}

function upgrade()
{
    if(points>=100)
    {
        points-=100;
        document.getElementById('points').textContent = "Points: " + points;
        luck = 1.1;
        document.getElementById("upgradeButton").hidden = "hidden";
        document.getElementById("bottom").textContent = "Upgraded!";
    }
}

function makeTable(arr)
{
    let myOldTable = document.getElementById("table");
    myOldTable.remove();
    const div = document.getElementById("six");
    const myTable = document.createElement("table");
    const myTr1 = document.createElement("tr");
    const myTh1 = document.createElement("th");
    const myTh2 = document.createElement("th");
    myTable.id = "table";
    myTh1.textContent = "Times";
    myTh2.textContent = "Number";
    div.appendChild(myTable);
    myTable.appendChild(myTr1);
    myTr1.appendChild(myTh1)
    myTr1.appendChild(myTh2)
    for (var i in arr)
    {
        const myTr2 = document.createElement("tr");
        const myTd1 = document.createElement("td");
        const myTd2 = document.createElement("td");
        myTd1.textContent = arr[i];
        myTd2.textContent = i;
        myTable.appendChild(myTr2);
        myTr2.appendChild(myTd1);
        myTr2.appendChild(myTd2);
    }
}

function findModes(info)
{
    let high = 0;
    let index = 0;
    for (var i in info)
    {
        current = info[i];
        if (current > high)
        {
            high = current;
            index = i;
        }
    }
    return index;
}

//goes thorugh the mode array to find the mode





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