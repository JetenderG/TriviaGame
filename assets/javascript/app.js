var count;
var correct = 0;
var incorrect = 0;
var count_secondary;
var break_cont = true;

////////////////////////////////////////////////////////////////////////////////////////////////
var trivaG = {

    questionTrivia: {


        question1: {
            title: "What character has a lightning bolt his or her forhead? ",
            possibleAnswers: ["Harry Potter", "Gandalf", "Dumbledore", "Voldemortd"],
            answer: "Harry Potter",
        },

        question2: {
            title: "What is the fastest animal on earth?",
            possibleAnswers: ["Cheetah", "Peregine Falcon", " Sail Fish", "Dire Wolf"],
            answer: "Peregine Falcon ",
        },

        question3: {
            title: "What type of rock is created within molten lava?",
            possibleAnswers: ["sedimentary", "Igneous", "Metamorphic"],
            answer: "Igneous",
        },
        question4: {
            title: "True/False: The Ardipthecus group were the earliest group of humans ",
            possibleAnswers: ["True", "False"],
            answer: "True",
        },

        question5: {
            title: "Thomas Edison discovered electricity in the year 1759",
            possibleAnswers: ["True", "False"],
            answer: "False",
        },
        question6: {
            title: "x-2(x+9) = 21 What is x? ",
            possibleAnswers: ["5", "3", "6", "3"],
            answer: "3",

        },
        question7: {
            title: "Which is statement is false",
            possibleAnswers: ["Iron Madian were used as totures devices", "Bulls are color blind", "Certain types of parasites can zombify insect"],
            answer: "Iron Madian were used as totures devices",
        },

        question8: {
            title: "True/False: Vanta black is the darkest black artficially created by humans",
            possibleAnswers: ["True", "False"],
            answer: "none",
        },
        question9: {
            title: "Which is the following is correct",
            possibleAnswers: ["the sky is green,the grass is blue, rock is a rock, none"],
            answer: "none",
        },
        questoin10: {
            title: "Which is the following is correct",
            possibleAnswers: ["the sky is green,the grass is blue, rock is a rock, none"],
            answer: "none",
        },

    },

    "radbuttons": function (array) {
        for (var i = 0; i < array.length; i++) {
            var rad = $('<input type = "radio" name ="radbtn">').attr('checked', true).addClass("radbtn").val(array[i]);
            var name = $('<label>').text(array[i]);
            $("#btn").append(name);
            $("#btn").append(rad);


        }
    },

    "clears": function () {

        var deletebtn = $("#btn").empty();
        return deletebtn;
    },




    "poptimer": function () {
        setInterval(function () {

            var poptimer = $("<div>").attr("width = '100px'  length = '100' margin = 'auto'")

            $(".container").append(poptimer);

        }), 5000;
    },
    "Score": function (checked, answer) {
        if (checked === answer && checked === true) {
            correct++
            console.log
        } else {
            incorrect++
        }
        return correct, incorrect;
    }

}
/////////////////////////////////////////////////////////////////////////////////////

$("#btnStart").on("click", function (event) {

    $("#btnStart").hide();

    setTimeout(function () {

        var quest_one = trivaG.questionTrivia.question1.title;
        var quest_one_array = trivaG.questionTrivia.question1.possibleAnswers;
        var quest_one_answer = trivaG.questionTrivia.question1.answer;



        // var quest_one_ans = trivaG.questionTrivia[2];


        $("#title").html(quest_one);

        trivaG.radbuttons(quest_one_array);

        $(".radbtn").on("click", function (e) {
            console.log(e);

        })



        //////////////
        setTimeout(function () {
            trivaG.clears();
            var quest_two = trivaG.questionTrivia.question2.title;
            var quest_two_array = trivaG.questionTrivia.question2.possibleAnswers;

            $("#title").html(quest_two)

            trivaG.radbuttons(quest_two_array);




            /////////////////////
            setTimeout(function () {
                trivaG.clears();
                var quest_three = trivaG.questionTrivia.question3.title;
                var quest_three_array = trivaG.questionTrivia.question3.possibleAnswers;

                $("#title").html(quest_three)

                trivaG.radbuttons(quest_three_array);




                /////////////////////////////
                setTimeout(function () {
                    trivaG.clears();

                    var quest_four = trivaG.questionTrivia.question4.title;
                    var quest_four_array = trivaG.questionTrivia.question4.possibleAnswers;


                    $("#title").html(quest_four);

                    trivaG.radbuttons(quest_four_array);




                    /////////////////////
                    setTimeout(function () {
                        trivaG.clears();

                        var quest_five = trivaG.questionTrivia.question5.title;
                        var quest_five_array = trivaG.questionTrivia.question5.possibleAnswers;

                        $("#title").html(quest_five);

                        trivaG.radbuttons(quest_five_array);






                        //////////////////////
                        setTimeout(function () {
                            trivaG.clears();

                            var quest_six = trivaG.questionTrivia.question6.title;
                            var quest_six_array = trivaG.questionTrivia.question6.possibleAnswers;

                            $("#title").html(quest_six);

                            trivaG.radbuttons(quest_six_array);





                            setTimeout(function () {
                                trivaG.clears();

                                var quest_seven = trivaG.questionTrivia.question7.title;
                                var quest_seven_array = trivaG.questionTrivia.question7.possibleAnswers;

                                $("#title").html(quest_seven);

                                trivaG.radbuttons(quest_seven_array);

                                /////////////////
                                setTimeout(function () {
                                    trivaG.clears();

                                    var quest_eight = trivaG.questionTrivia.question8.title;
                                    var quest_eight_array = trivaG.questionTrivia.question8.possibleAnswers;
                                    $("#title").html(quest_eight);

                                    trivaG.radbuttons(quest_eight_array);




                                    ///////////////
                                    setTimeout(function () {
                                        trivaG.clears();

                                        var quest_nine = trivaG.questionTrivia.question9.title;
                                        var quest_nine_array = trivaG.questionTrivia.question9.possibleAnswers;

                                        $("#title").html(quest_nine)

                                        trivaG.radbuttons(quest_nine_array);

                                        setTimeout(function () {
                                            trivaG.clears();

                                            var quest_ten = trivaG.questionTrivia.questoin10.title;
                                            var quest_ten_array = trivaG.questionTrivia.questoin10.possibleAnswers;

                                            $("#title").html(quest_ten)

                                            trivaG.radbuttons(quest_ten_array);



                                        }, 2000)

                                    }, 2000)

                                }, 2000)

                            }, 2000)


                        }, 2000)

                    }, 2000)
                }, 2000)
            }, 2000)

        }, 2000)
    }, )

});