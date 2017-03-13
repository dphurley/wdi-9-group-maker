$(function () {

    var groupNumber = 0;
    displayGroupNumber();

    function displayGroupNumber () {
        if(groupNumber > 0) {
            $("#group-id").html(groupNumber);
        }
    }

    function updateGroupNumber () {
        groupNumber++;
    }

    function buildStudentNamesDOMElement (students) {
        var studentNamesDOMElement = ["<div>"];

        students.forEach(function (student) {
            studentNamesDOMElement.push(
                "<h1>" + student.name + "</h1>"
            )
        });

        studentNamesDOMElement.push("</div>");

        return studentNamesDOMElement.join("");
    }

    function displayStudentNames (studentNamesDOMElement) {
        $("#student-names").html(studentNamesDOMElement);
    }

    function randomizeStudentList () {
        students.sort(function(){return 0.5 - Math.random()});
    }

    // function determineStudentsToDisplay () {
    //     var numberOfGroups = students.sort
    // }

    $("#next-group-button").on("click", function () {

        // var studentsToDisplay = determineStudentsToDisplay();

        var studentNamesDOMElement = buildStudentNamesDOMElement(students);
        displayStudentNames(studentNamesDOMElement);

        updateGroupNumber();
        displayGroupNumber();
    });

    var students = [
        { id: 1, name: "Alex Gadd", available: true },
        { id: 2, name: "Aylin McGinnis", available: true },
        { id: 3, name: "Blake Smith", available: true },
        { id: 4, name: "Brandon King", available: true },
        { id: 5, name: "Jibril Sulaiman II", available: true },
        { id: 6, name: "Charles Wilkinson", available: true },
        { id: 7, name: "Dan Milo", available: true },
        { id: 8, name: "David Hernquist", available: true },
        { id: 9, name: "Dee Davis", available: true },
        { id: 10, name: "Erin Martin", available: true },
        { id: 11, name: "Felicia Garcia", available: true },
        { id: 12, name: "Harry Karambizi", available: true },
        { id: 13, name: "Hassan Masroor", available: true },
        { id: 14, name: "Jacob Butler", available: true },
        { id: 15, name: "Josh Seipel", available: true },
        { id: 16, name: "Joy Sutton", available: true },
        { id: 17, name: "Julian Ireland Chandler", available: true },
        { id: 18, name: "Lanchana Shivananda", available: true },
        { id: 19, name: "Liam Robinson", available: true },
        { id: 20, name: "Maggie Kinney", available: true },
        { id: 21, name: "Matt Atkins", available: true },
        { id: 22, name: "Michael Torres", available: true },
        { id: 23, name: "Neil Morris", available: true },
        { id: 24, name: "Peter Colella", available: true },
        { id: 25, name: "Randy Galeano", available: true },
        { id: 26, name: "Ray Meibaum", available: true },
        { id: 27, name: "Rush Myers", available: true },
        { id: 28, name: "Sungmin Ro", available: true }
    ];

    randomizeStudentList();

});
