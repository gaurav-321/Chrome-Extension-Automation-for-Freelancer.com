//document on ready
let exit_text = "Hi,\nI have 3 years of experience in python programming and automation projects.\nIf you are interested we can further discuss the project.\n\nThanks And Regards\nGaurav Verma";
//run function when #descriptionTextArea is visible
$(document).ready(function() {
    var url = window.location.href;
    if (url.includes("freelancer.com/projects/")){
        setTimeout(function(){
            $("#descriptionTextArea").val(exit_text);
          }, 6000);
    };
});