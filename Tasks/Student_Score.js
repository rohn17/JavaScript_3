let students = [
 { name: "Rohan", age: 22, scores: [90, 93, 92] },
 { name: "Ayush", age: 20, scores: [89, 90, 86] },
 { name: "Sagar", age: 21, scores: [87, 80, 85] }
];

function analyzeScores(students) {

    let topStudent = "";
    let highestAverage = 0;

    for (let i = 0; i < students.length; i++) {

        let total = 0;

        for (let j = 0; j < students[i].scores.length; j++) {
            total += students[i].scores[j];
        }

        let average = total / students[i].scores.length;

        console.log(students[i].name + " Average Score: " + average);

        if (average > highestAverage) {
            highestAverage = average;
            topStudent = students[i].name;
        }
    }

    console.log("Top Student:", topStudent, "with average score of", highestAverage);
}

analyzeScores(students);