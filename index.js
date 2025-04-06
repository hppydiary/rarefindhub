function loadXMLDoc(btn_value)
{
    btn_click = btn_value.id;

    //if else if else is responsible for manipulationg the properties of the html tags
    if(btn_click == 'information')
        {
            document.getElementById('home').removeAttribute("style");
            document.getElementById('home_div').style.display = "none";
            document.getElementById('gallery').removeAttribute("style");
            document.getElementById('gallery_div').style.display = "none";
            document.getElementById('about').removeAttribute("style");
            document.getElementById('about_div').style.display = "none";

            //animation in navigation bottom
            document.getElementById('nhc').style.animationName = "";
            document.getElementById('nh').style.animationName = "";
            
            document.getElementById('sn').style.display = "flex";
            document.getElementById('information_div').style.display = "flex";
            document.getElementById('information').style.backgroundColor = "#4e4e4e";
            document.getElementById('information').style.boxShadow = "0px 0px 5px black inset";

            xmlhr(btn_click);
        }

    else if(btn_click == 'home')
    {
        document.getElementById('information').removeAttribute("style");
        document.getElementById('information_div').style.display = "none";
        document.getElementById('gallery').removeAttribute("style");
        document.getElementById('gallery_div').style.display = "none";
        document.getElementById('about').removeAttribute("style");
        document.getElementById('about_div').style.display = "none";

        document.getElementById('sn').style.display = "none";

        //animation in navigation bottom
        document.getElementById('nhc').style.animationName = "";
        document.getElementById('nh').style.animationName = "";

        document.getElementById('home_div').style.display = "flex";
        document.getElementById('home').style.backgroundColor = "#4e4e4e";
        document.getElementById('home').style.boxShadow = "0px 0px 5px black inset";
    }
    else if(btn_click == 'gallery')
        {
            document.getElementById('information').removeAttribute("style");
            document.getElementById('information_div').style.display = "none";
            document.getElementById('home').removeAttribute("style");
            document.getElementById('home_div').style.display = "none";
            document.getElementById('about').removeAttribute("style");
            document.getElementById('about_div').style.display = "none";

            document.getElementById('sn').style.display = "none";

            //animation in navigation bottom
            document.getElementById('nhc').style.animationName = "";
            document.getElementById('nh').style.animationName = "";
    
            document.getElementById('gallery_div').style.display = "flex";
            document.getElementById('gallery').style.backgroundColor = "#4e4e4e";
            document.getElementById('gallery').style.boxShadow = "0px 0px 5px black inset";
            images();
        }
        else if(btn_click == 'about')
        {
            document.getElementById('information').removeAttribute("style");
            document.getElementById('information_div').style.display = "none";
            document.getElementById('gallery').removeAttribute("style");
            document.getElementById('gallery_div').style.display = "none";
            document.getElementById('home').removeAttribute("style");
            document.getElementById('home_div').style.display = "none";
            
            document.getElementById('sn').style.display = "none";

            //animation in navigation bottom
            document.getElementById('nhc').style.animationName = "";
            document.getElementById('nh').style.animationName = "";
        
            document.getElementById('about_div').style.display = "flex";
            document.getElementById('about').style.backgroundColor = "#4e4e4e";
            document.getElementById('about').style.boxShadow = "0px 0px 5px black inset";
        }


}

function images()
{
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const xmlDoc = xhttp.responseXML;
        const cd = xmlDoc.getElementsByTagName("CD");
        images_all(cd);
      }
    };
  
    xhttp.open('GET', 'index.xml', true);
    xhttp.send();
}
function images_all(cd)
{
    let table = "<div class='gallery_selection_cont'> ";
    for(let i=0; i<cd.length; i++){
        
        var larawan;
        larawan = cd[i].getElementsByTagName("PIC")[0].childNodes[0].nodeValue;

        table+="<div id='gallery_selection'> <div  id='ipic' class='gallery_ipic' style='background-image:url("+larawan+");'></div></div>";
        
    }
    table+="</div>";
    document.getElementById("gallery_div").innerHTML = table;
}


// this is almost same as xmlhr() function but the difference is...
let interval_nav; 
function filter(clk)
{
    const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const xmlDoc = xhttp.responseXML;
      const cd = xmlDoc.getElementsByTagName("CD");
      //...the clk variable is getting by display_select() func to get the id of html element that the user has clicked
      display_select(cd, clk);
    }
  };
  
  xhttp.open('GET', 'index.xml', true);
  xhttp.send();
}
//once the display get the value from filter function...
function display_select(cd, clk)
{
    button_click = clk.id;
    let table = "";
    for(let i=0; i<cd.length; i++){
        //the display_select will check if the type is equal to the id of the html element that has been click by the user
        //if this is true, the NAME and the DESCRIPTION will be set to the table variable
        if(cd[i].getElementsByTagName("TYPE")[0].childNodes[0].nodeValue == button_click)
        {
            var larawan;
            larawan = cd[i].getElementsByTagName("PIC")[0].childNodes[0].nodeValue;

            table+="<div id='selection'> <div  id='ipic' class='ipic' style='background-image:url("+larawan+");'><div class='iNAME'><p class='name_tit'>"+
            cd[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue + "</p></div></div><div class='iname'>"+
            cd[i].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue + "</div></div>";
        }
    }
    document.getElementById("information_div").innerHTML = table;
    
}

//this xmlhr is used on the no.24 line of code
//the code in this function is almost same as filter() function
function xmlhr(this_clk)
{

    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const xmlDoc = xhttp.responseXML;
        const cd = xmlDoc.getElementsByTagName("CD");
        //except in this one
        display_all(cd,this_clk);
      }
    };
  
    xhttp.open('GET', 'index.xml', true);
    xhttp.send();
}

//unlike the display_select func, this display_all is using loop while the display_select is using conditional statement
function display_all(cd,this_clk)
{
    let table = "";
    for(let i=0; i<cd.length; i++){
        
        var larawan;
        larawan = cd[i].getElementsByTagName("PIC")[0].childNodes[0].nodeValue;

        table+="<div id='selection'> <div  id='ipic' class='ipic' style='background-image:url("+larawan+");'><div class='iNAME'><p class='name_tit'>"+
        cd[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue + "</p></div></div><div class='iname'>"+
        cd[i].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue + "</div></div>";
        
    }
    if(this_clk == "information")
        {
            document.getElementById("information_div").innerHTML = table;
        }
        else if(this_clk == "gallery")
        {
           document.getElementById("gallery_div").innerHTML = table;
        }
}

var button_click;






//this is responsible for animation, the animation will work whenever the animation name changes
var cond = true;
function animation_navhead()
{

    if(cond){
        document.getElementById('nhc').style.animationName = "navHC_open";
        document.getElementById('nh').style.animationName = "navH_open";
        cond = false;
    }else{
        document.getElementById('nhc').style.animationName = "navHC_close";
        document.getElementById('nh').style.animationName = "navH_close";
        cond = true;
    }

}

let interval;

//this is responsible for automatic retrieving of value of xml to html in every 10 seconds
function startInt()
{
    interval = setInterval(xmlhr, 10000);
    clearInterval(interval_nav);
}

function stopInt()
{
    clearInterval(interval);
    clearInterval(interval_nav);
}

function startInt_nav()
{
    interval_nav = setInterval(filter, 10000);
    clearInterval(interval);
}

function stopInt_nav()
{
    clearInterval(interval);
    clearInterval(interval_nav);
}

//this will prevent the xml retrieval to retrieve the sorted xml files to all files
document.getElementById("home").addEventListener('click', stopInt, stopInt_nav);
document.getElementById("information").addEventListener('click', startInt, stopInt_nav);
document.getElementById("gallery").addEventListener('click', startInt, stopInt_nav);
document.getElementById("about").addEventListener('click', stopInt, stopInt_nav);

document.getElementById("shoes").addEventListener('click', startInt_nav, stopInt);
document.getElementById("shorts").addEventListener('click', startInt_nav, stopInt);
document.getElementById("shirt").addEventListener('click', startInt_nav, stopInt);
document.getElementById("accessory").addEventListener('click', startInt_nav, stopInt);

function click_pichead(picval)
{
    if(picval.id=="leander")
    {
        document.getElementById('location').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7714.071980431848!2d120.51207656962599!3d14.823238079365023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1718608781534!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        document.getElementById('p_name').innerHTML = "Name: Leander P. Ochea";
        document.getElementById('p_gacc').innerHTML = "Email: lpochea@bpsu.edu.ph";
        document.getElementById('p_dbirth').innerHTML = "Date of Birth: May 27, 2003";
        document.getElementById('p_loc').innerHTML = "Address: Mabuco, Hermosa, Bataan";
        document.getElementById('p_status').innerHTML = "Status: Single";
        document.getElementById('p_num').innerHTML = "Phone Number: 09125567205";
    }
    else if(picval.id=="jusmin")
    {
        document.getElementById('location').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30886.213455023488!2d120.46286489818836!3d14.611793646034583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339615cd144b4b51%3A0x6ec3bf7ea97f41fc!2sPantingan%2C%20Bataan!5e0!3m2!1sen!2sph!4v1718610395914!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        document.getElementById('p_name').innerHTML = "Name: Jusmin Kate A. Landicho";
        document.getElementById('p_gacc').innerHTML = "Email: jkalandicho@bpsu.edu.ph";
        document.getElementById('p_dbirth').innerHTML = "Date of Birth: September 07, 2004";
        document.getElementById('p_loc').innerHTML = "Address: Pantingan, Pilar, Bataan";
        document.getElementById('p_status').innerHTML = "Status: Single";
        document.getElementById('p_num').innerHTML = "Phone Number: 09126781630";
    }
    else if(picval.id=="armabel")
    {
        document.getElementById('location').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.679505486374!2d120.59005817487194!3d14.560311285921287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33963c4118449d2d%3A0xd9b392cc3293e408!2sJ.%20Romero%20St%2C%20Limay%2C%20Bataan!5e0!3m2!1sen!2sph!4v1718612505994!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        document.getElementById('p_name').innerHTML = "Name: Armabel N. Ramos";
        document.getElementById('p_gacc').innerHTML = "Email: anramos@bpsu.edu.ph";
        document.getElementById('p_dbirth').innerHTML = "Date of Birth: October 25, 2003";
        document.getElementById('p_loc').innerHTML = "Address: J.Romero st.Townsite, Limay, Bataan";
        document.getElementById('p_status').innerHTML = "Status: Single";
        document.getElementById('p_num').innerHTML = "Phone Number: 09318982026";
    }
    else if(picval.id=="jasmine")
    {
        document.getElementById('location').innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15435.188143034557!2d120.51186554582122!3d14.724064022430412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339641d5d4370b7d%3A0x8f63f82d9f874ed3!2sLaon%2C%20Fourlane%20Commercial%2C%20Abucay%2C%20Bataan!5e0!3m2!1sen!2sph!4v1718612559955!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        document.getElementById('p_name').innerHTML = "Name: Jasmine Elaine Santos";
        document.getElementById('p_gacc').innerHTML = "Email: jedcsantos@bpsu.edu.ph";
        document.getElementById('p_dbirth').innerHTML = "Date of Birth: March 17, 2003";
        document.getElementById('p_loc').innerHTML = "Address: Laon, Abucay, Bataan";
        document.getElementById('p_status').innerHTML = "Status: Single";
        document.getElementById('p_num').innerHTML = "Phone Number: 09774183345";
    }
}