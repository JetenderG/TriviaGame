var count;
var correct = 0;
var incorrect = 0;
var count_secondary;
var break_cont = true;

////////////////////////////////////////////////////////////////////////////////////////////////
var trivaG = {

        questionTrivia: [


            question1 = [
                title = "What character has a lightning bolt his or her forhead? ",
                possibleAnswers = ["Harry Potter", "Gandalf", "Dumbledore", "Voldemortd"],
                answer = "Harry Potter",
            ],
            question2 = [
                title = "What is the fastest animal on earth?",
                possibleAnswers = ["Cheetah", "Peregine Falcon", " Sail Fish", "Dire Wolf"],
                answer = "Peregine Falcon ",
            ],

            question3 = [
                title = "What type of rock is created within molten lava?",
                possibleAnswers = ["sedimentary", "Igneous", "Metamorphic"],
                answer = "Igneous",
            ],
            question4 = [
                title = "True/False: The Ardipthecus group were the earliest group of humans ",
                possibleAnswers = ["True", "False"],
                answer = "True",
            ],

            question5 = [
                title = "",
                possibleAnswers = ["True", "False"],
                answer = "none",
            ],
            question6 = [
                title = "Which is the following is correct",
                possibleAnswers = ["the sky is green,the grass is blue, rock is a rock, none"],
                answer = "none",
                /* 
        ],
        question7: {
            title: "Which is the following is correct",
            possibleAnswers: ["the sky is green,the grass is blue, rock is a rock, none"],
            answer: "none",
        },
        question8: {
            title: "Which is the following is correct",
            possibleAnswers: ["the sky is green,the grass is blue, rock is a rock, none"],
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
        },*/


            ],

            "radbuttons": function ([a]) {

                for (var i = 0; i < a; i++) {
                    var rad = $('<input type = "radio" name ="rbtn"/>');
                    rad.append(".questionBox");
                }

            },


            "decideElement": function (items) {

                console.log(items[0]);
                console.log(items[1]);
                console.log(items[2]);
                /////checks all questions

            },

            /* var box = $('<div class = "trivBox"; style = "width:200px; length:200px;"></div>')
             $(".questionBox").append("box");*/



            "tmer": function () {
                setInterval(function () {



                }), 30000;
            },
            "poptimer": function () {
                setInterval(function () {

                    $("popupAns")



                }), 5000;




            },
            "Score": function (checked, correct) {

                if (checked & correct === true) {
                    correct++
                } else {
                    incorrect++
                }

            }

        }


        $("#btnStart").on("click", function () {

            setTimeout(function () {
                var quest_one = trivaG.questionTrivia[0];
                var quest_one_array = trivaG.questionTrivia[1];
                var quest_one_ans = trivaG.questionTrivia[2];

                trivaG.decideElement(quest_one);
                trivaG.radbuttons(quest_one_array);

                $(".questionBox").html(quest_one);

                $(".questionBox").html(quest_one_array);



                setTimeout(function () {
                    var quest_two = trivaG.questionTrivia[0];
                    var quest_two_array = trivaG.questionTrivia[1];
                    var quest_two_ans = trivaG.questionTrivia[2];

                    trivaG.decideElement(quest_two);
                    $(".questionBox").html(quest_two)
                    setTimeout(function () {
                        var quest_three = trivaG.questionTrivia[0];
                        var quest_three_array = trivaG.questionTrivia[1];
                        var quest_three_ans = trivaG.questionTrivia[2];

                        $(".questionBox").html("see")

                        setTimeout(function () {
                            var quest_four = trivaG.questionTrivia[0];
                            var quest_four_array = trivaG.questionTrivia[1];
                            var quest_four_ans = trivaG.questionTrivia[2];

                            $(".questionBox").html("neat")

                            setTimeout(function () {
                                var quest_five = trivaG.questionTrivia[0];
                                var quest_five_array = trivaG.questionTrivia[1];
                                var quest_five_ans = trivaG.questionTrivia[2];

                                $(".questionBox").html("life")
                                setTimeout(function () {
                                    var quest_six = trivaG.questionTrivia[0];
                                    var quest_six_array = trivaG.questionTrivia[1];
                                    var quest_six_ans = trivaG.questionTrivia[2];
                                    $(".questionBox").html("neat")
                                    setTimeout(function () {
                                        var quest_seven = trivaG.questionTrivia[0];
                                        var quest_seven_array = trivaG.questionTrivia[1];
                                        var quest_seven_ans = trivaG.questionTrivia[2];
                                        $(".questionBox").html("great")
                                        setTimeout(function () {
                                            var quest_eight = trivaG.questionTrivia[0];
                                            var quest_eight_array = trivaG.questionTrivia[1];
                                            var quest_eight_ans = trivaG.questionTrivia[2];
                                            $(".questionBox").html("great")
                                            setTimeout(function () {
                                                var quest_nine = trivaG.questionTrivia[0];
                                                var quest_nine_array = trivaG.questionTrivia[1];
                                                var quest_nine_ans = trivaG.questionTrivia[2];
                                                $(".questionBox").html("great")
                                                setTimeout(function () {
                                                    var quest_ten = trivaG.questionTrivia[0];
                                                    var quest_ten_array = trivaG.questionTrivia[1];
                                                    var quest_ten_ans = trivaG.questionTrivia[2];
                                                    $(".questionBox").html("great")


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