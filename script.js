//VARIABLES
$(".variableButton").click(function(){
    let userName = $(".variableInput").val();
    $(".variableDisplay1").text(`Your variable is ${userName}. It is stored in userName.`);
    $(".variableDisplay2").html(`<img src='https://i.imgflip.com/kpikr.jpg'>`);
});


//CONDITIONAL STATEMENTS
$(".conditionalButton").click(function(){
    let guess = $(".conditionalInput").val();
    if(guess === "abracadabra"){
        $(".secretDisplay").html(`<img src='https://media.giphy.com/media/3i4xTtJQIJk0o/giphy.gif'>`);
    } else{
        $(".secretDisplay").html(`<img src='https://media.tenor.com/images/c60b0c9f441f523e67e64afc52bec690/tenor.gif'>`);
    }
});


//Loops and Arrays Section
$(".loopImage").hide();
    //These are examples of an array.
        let artist = [
            "Grimes", 
            "Billie eilish", 
            "", 
            "Adele", 
            "Drake", 
            "Selena Gomez",
        ];
        let imageURL = [
            "http://www.billboard.com/files/styles/article_main_image/public/media/beyonce-tour-bb5-topline-2016-billboard-650.jpg", "http://thatoregonlife.com/wp-content/uploads/2016/03/bieber.jpg", 
            "https://akns-images.eonline.com/eol_images/Entire_Site/2019422/rs_600x600-190522154219-600.billie-eilish.cm.52219.jpg?fit=around|1200:1200&crop=1200:1200;center,top&output-quality=90", 
            "https://d9nvuahg4xykp.cloudfront.net/-6998574082808707128/6414015629236926518.jpg", 
            "https://iscale.iheart.com/v3/url/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL3JvdmkvMTA4MC8wMDAzLzcyMy9NSTAwMDM3MjM4NDguanBn", 
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwNTE2MDMyMl5BMl5BanBnXkFtZTgwMjAyODM3MTI@._V1_UY317_CR12,0,214,317_AL_.jpg",
        ];

    $(".arrayButton").click(function(){
        //$(".arrayImage").show(); 
   
        //Here is the for of loop.
        for(let image of imageURL){
           
            $(".arrayDisplay").append(`<br>`);
            $(".arrayDisplay").append(`<img src= ${image} >`);
            $(".arrayDisplay").append(`<br>`);
        }
        for(let name of artist){
            $(".arrayDisplay").append(`<li>${name}</li>`);
        }
    });

