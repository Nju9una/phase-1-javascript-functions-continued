// code your solution here
// Function to create fun activities for Saturdays
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function to handle Monday work activities
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// Function to wrap an adjective in visual flair
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

