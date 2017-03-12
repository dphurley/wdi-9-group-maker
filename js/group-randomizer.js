$(function () {

    var groupNumber = 1;
    displayGroupNumber();

    function displayGroupNumber () {
        $("#group-id").html(groupNumber);
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

    $("#next-group-button").on("click", function () {

        var studentNamesDOMElement = buildStudentNamesDOMElement(students);
        displayStudentNames(studentNamesDOMElement);

        updateGroupNumber();
        displayGroupNumber();
    });

    var students = [
        { name: "Alex Gadd" },
        { name: "Aylin McGinnis" },
        { name: "Blake Smith" },
        { name: "Brandon King" },
        { name: "Jibril Sulaiman II" },
        { name: "Charles Wilkinson" },
        { name: "Dan Milo" },
        { name: "David Hernquist" },
        { name: "Dee Davis" },
        { name: "Erin Martin" },
        { name: "Felicia Garcia" },
        { name: "Harry Karambizi" },
        { name: "Hassan Masroor" },
        { name: "Jacob Butler" },
        { name: "Josh Seipel" },
        { name: "Joy Sutton" },
        { name: "Julian Ireland Chandler" },
        { name: "Lanchana Shivananda" },
        { name: "Liam Robinson" },
        { name: "Maggie Kinney" },
        { name: "Matt Atkins" },
        { name: "Michael Torres" },
        { name: "Neil Morris" },
        { name: "Peter Colella" },
        { name: "Randy Galeano" },
        { name: "Ray Meibaum" },
        { name: "Rush Myers" },
        { name: "Sungmin Ro" }
    ];

});
