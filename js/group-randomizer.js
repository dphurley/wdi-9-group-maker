$(function () {

    // CONFIG
    var students = [
        {id: 1, name: "Ashley Corry", available: true},
        {id: 2, name: "Benjamin Floyd", available: true},
        {id: 3, name: "Christopher McClain", available: true},
        {id: 4, name: "Christy Bartholomew", available: true},
        {id: 5, name: "Clark Waite", available: true},
        {id: 6, name: "Jeffrey Henneberg", available: true},
        {id: 7, name: "Monica Grages", available: true},
        {id: 8, name: "Nicholas DeSantis", available: true},
        {id: 9, name: "Sarah Moore", available: true},
        {id: 10, name: "Shelbi Pinkney", available: true},
        {id: 11, name: "William Rausch", available: true},
        {id: 12, name: "Yeni Nomezqui", available: true},
        {id: 13, name: "Kate Montha", available: true}
    ];
    randomizeStudentList();

    var numberOfGroups = 3;
    var numberPerGroup = Math.floor(students.length / numberOfGroups);
    var remainderStudents = students.length % numberOfGroups;
    // END CONFIG

    var groupNumber = 0;
    displayGroupNumber();

    function displayGroupNumber() {
        if (groupNumber > 0) {
            $("#group-id").html(groupNumber);
        }
    }

    function updateGroupNumber() {
        groupNumber++;
    }

    function buildStudentNamesDOMElement(students) {
        var studentNamesDOMElement = ["<div>"];

        students.forEach(function (student) {
            studentNamesDOMElement.push(
                "<h1>" + student.name + "</h1>"
            )
        });

        studentNamesDOMElement.push("</div>");

        return studentNamesDOMElement.join("");
    }

    function displayStudentNames(studentNamesDOMElement) {
        $("#student-names").html(studentNamesDOMElement);
    }

    function randomizeStudentList() {
        students.sort(function () {
            return 0.5 - Math.random()
        });
    }

    function determineStudentsToDisplay() {
        var studentsToDisplay = [];

        var availableStudents = students.filter(function (student) {
            return student.available === true;
        });

        var addOneOrZero = remainderStudents > 0 ? 1 : 0;
        var numberOfStudentsForThisGroup = numberPerGroup + addOneOrZero;

        for (var i = 0; i < numberOfStudentsForThisGroup; i++) {
            studentsToDisplay.push(availableStudents[i]);
        }

        decrementRemainderStudents();
        return studentsToDisplay;
    }

    function decrementRemainderStudents() {
        if (remainderStudents > 0) remainderStudents--;
    }

    function markDisplayedStudentsAsUnavailable(displayedStudents) {
        displayedStudents.forEach(function (displayedStudent) {
            var studentToMarkUnavailable = students.find(function (student) {
                return student.id === displayedStudent.id;
            });

            studentToMarkUnavailable.available = false;
        });
    }

    $("#next-group-button").on("click", function () {

        updateGroupNumber();
        displayGroupNumber();

        var studentsToDisplay = determineStudentsToDisplay();
        var studentNamesDOMElement = buildStudentNamesDOMElement(studentsToDisplay);
        displayStudentNames(studentNamesDOMElement);

        markDisplayedStudentsAsUnavailable(studentsToDisplay);

    });

});
