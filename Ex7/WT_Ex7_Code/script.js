$(document).ready(function(){
    $("#weight, #height").change(function(){
        var weight = parseInt($("#weight").val());
        var height = parseInt($("#height").val());

        var newHeight = height / 100;

        var bmi = weight / newHeight;

        bmi = bmi.toFixed(1);
        
        $("#output1").text(bmi);

        var output2 = $("#output2");
        if(bmi < 18)
        {
            output2.text("Underweight");
        }
        else if(bmi >=18 && bmi < 25)
        {
            output2.text("Normal");
        }
        else if(bmi >=25 && bmi <= 30)
        {
            output2.text("Overweight");
        }
        else
        {
            output2.text("Obese");
        }
    });
});