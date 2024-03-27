// code your solution here
function superbowlWin(record) {
    const winEntry = record.find(entry => entry.result === "W");
    return winEntry ? winEntry.year : undefined;
}