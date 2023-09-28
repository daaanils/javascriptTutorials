let grade = 74;

if (grades >= 90) {
    mark = 'A';
}else if (grades >= 80) {
    mark = 'B';
}else if (grades >= 75) {
    mark = "C";
} else {
    mark = 'F';
}

const finalMark = grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 75 ? "C" : 'F';
