(function Spinner ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

//GLobal variable
var GLobal;
// var lan_variable;
//context menu code
const str1 = window.location.search;
const urlParams = new URLSearchParams(str1);
const langVar = urlParams.get('language');
const pro = urlParams.get('mode');
document.getElementById("Save").style.display = "none";
if(pro == "branding")
{ 
      document.getElementById("Save").style.display = "inline";
      document.getElementById("Disable").removeAttribute("href");
      document.getElementById("Editable").contentEditable="true";
      document.getElementsByClassName("dis").contentEditable="true";
        {const contextMenu = document.getElementById("context-menu");
      const scope = document.querySelector("body");

      const normalizePozition = (mouseX, mouseY) => {
        // ? compute what is the mouse position relative to the container element (scope)
        let {
          left: scopeOffsetX,
          top: scopeOffsetY,
        } = scope.getBoundingClientRect();

        scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
        scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;

        const scopeX = mouseX - scopeOffsetX;
        const scopeY = mouseY - scopeOffsetY;

        // ? check if the element will go out of bounds
        const outOfBoundsOnX =
          scopeX + contextMenu.clientWidth > scope.clientWidth;

        const outOfBoundsOnY =
          scopeY + contextMenu.clientHeight > scope.clientHeight;

        let normalizedX = mouseX;
        let normalizedY = mouseY;

        // ? normalize on X
        if (outOfBoundsOnX) {
          normalizedX =
            scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
        }

        // ? normalize on Y
        if (outOfBoundsOnY) {
          normalizedY =
            scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
        }

        return { normalizedX, normalizedY };
      };


      $(document).ready(function(){ 
        var button = document.getElementsByClassName("btn");
        var contextmenu = document.getElementById("context-menu");
        var colorInput = document.getElementById("myTextBoxId");

      for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("contextmenu", function(e) {
      event.preventDefault();

      const { clientX: mouseX, clientY: mouseY } = event;

      const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY);

      contextMenu.classList.remove("visible");

      contextMenu.style.top = `${normalizedY}px`;
      contextMenu.style.left = `${normalizedX}px`;

      setTimeout(() => {
          contextMenu.classList.add("visible");
      });
      });
      }

      colorInput.addEventListener("change", function() {
      for (let i = 0; i < button.length; i++) {
        button[i].style.backgroundColor = colorInput.value;
      }
      let body = {
        "colors": {
          "primary_color": colorInput.value,
          "secondary_color": "green",
          "link_color": "#756C6E",
          "button_hover_color": "pink"
        },
        "font": "Arnoldboecklin"
      }
      updateJSON(body);
      contextmenu.style.display = "none";
      });

      document.addEventListener("click", function(e) {
      if (!contextmenu.contains(e.target)) {
        //contextmenu.style.display = "none";
      }
      });
      });

      scope.addEventListener("click", (e) => {
        // ? close the menu if the user clicks outside of it
        if (e.target.offsetParent != contextMenu) {
          contextMenu.classList.remove("visible");
        }
      });

      history.scrollRestoration = "manual";

      $(window).on('beforeunload', function(){
            $(window).scrollTop(0);
      });


/*
      //function to add new bins
      var current_i = 7;
      function addbin() {
            let data = GLobal
            //console.log("global="+GLobal.LatestStories);
           // console.log("in the adding function");
            var holder = document.getElementById("holder");
          
            // Create a new container with the current value of i
            var newbin = document.createElement("div");
            newbin.classList.add("bin", "col-xs-2", "col-sm-6", "col-md-4");
            newbin.id = `output`;
            newbin.innerHTML = `
              <a class="cat-item rounded p-4">
                <img src="img/3.jpg" class="b-img-1">
                <h3 class="heading1">Blog ${current_i}</h3>
                <span class="text-truncate me-3">
                  <p class="blog-heading-1" id="blog${current_i}">`+ data.LatestStories[current_i].Blog+`</p>
                 <p class="blog-text" id="b-Description${current_i}">`+ data.LatestStories[current_i].Description+`</p>
                </span>
                <span class="name">Name. Date</span>
              </a>
              <button class="close"  onclick="removebin(this.parentNode)">x</button>
            `;
            holder.appendChild(newbin);
            current_i++;
            function removebin(bin) {
            bin.remove();
          } 
        };
    
        function removebin(bin) {
          bin.remove();branding
          
        }
    */
     
};
} //ending for mode=branding      



//function to get updated context menu colours to json bin
function updateJSON(body){
let req = new XMLHttpRequest();
req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    //console.log(req.responseText);
  }
};
req.open("PUT", "https://api.jsonbin.io/v3/b/64450844b89b1e22998fdf26", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("X-Master-Key", "$2b$10$CdgigGkb4zu5o5wkNgfDluTAgg7/ca/2Ng4LoPyG8ipCZ87bBlbxS");
req.send(JSON.stringify(body));
}

//ajax calls
//________________________________________________________________________________________________________________________
//genric function to perform ajax calls



//function for jobs related information
function JobListing(exam)
{
  switch(langVar)
  {
    case "en":
      for (let i = 0; i < 7; i++) {
              //console.log(langVar)
              document.getElementById("Title" + i).innerHTML = exam.record.JobListing[i].Role[0].en;
              document.getElementById("city" + i).innerHTML = "<i class=\"fa fa-map-marker-alt text-primary me-2\"></i>" + exam.record.JobListing[i].Location[0].en;
              document.getElementById("mode" + i).innerHTML = "<i class=\"far fa-clock text-primary me-2\"></i>" + exam.record.JobListing[i].information[0].en;
              document.getElementById("sal" + i).innerHTML = "<i class=\"far fa-money-bill-alt text-primary me-2\"></i>" + exam.record.JobListing[i].SalaryRange;
              }
            var txt = "";
            for (let i = 0; i < 5; i++) {
                txt += '<div class="job-item p-4 mb-4"><div class="row g-4"><div class="col-sm-12 col-md-8 d-flex align-items-center"><img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;"><div class="text-start ps-4"><h5 class="mb-3" id = "Title' + i + '">' + exam.record.JobListing[i].Title[0].en + '</h5><span class="text-truncate me-3" id = "city' + i + '"><i class="fa fa-map-marker-alt text-primary me-2"></i>' + exam.record.JobListing[i].Location[0].en + '</span><span class="text-truncate me-3" id = "mode' + i + '"><i class="far fa-clock text-primary me-2"></i>' + exam.record.JobListing[i].Mode[0].en + '</span><span class="text-truncate me-0" id = "sal' + i + '"><i class="far fa-money-bill-alt text-primary me-2"></i>' + exam.record.JobListing[i].SalaryRange + '</span></div></div><div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center"><div class="d-flex mb-3"><a class="btn btn-light btn-square me-3" href=""></a><a class="btn btn-primary" href="">Apply Now</a></div><small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small></div></div></div>';
              }
      break;
    case "fr":
            for (let i = 0; i < 7; i++) {
              document.getElementById("Title" + i).innerHTML = exam.record.JobListing[i].Role[0].fr;
              document.getElementById("city" + i).innerHTML = "<i class=\"fa fa-map-marker-alt text-primary me-2\"></i>" + exam.record.JobListing[i].Location[0].fr;
              document.getElementById("mode" + i).innerHTML = "<i class=\"far fa-clock text-primary me-2\"></i>" + exam.record.JobListing[i].information[0].fr;
              document.getElementById("sal" + i).innerHTML = "<i class=\"far fa-money-bill-alt text-primary me-2\"></i>" + exam.record.JobListing[i].SalaryRange;
              }
            var txt = "";
            for (let i = 0; i < 5; i++) {
                txt += '<div class="job-item p-4 mb-4"><div class="row g-4"><div class="col-sm-12 col-md-8 d-flex align-items-center"><img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;"><div class="text-start ps-4"><h5 class="mb-3" id = "Title' + i + '">' + exam.record.JobListing[i].Title[0].fr + '</h5><span class="text-truncate me-3" id = "city' + i + '"><i class="fa fa-map-marker-alt text-primary me-2"></i>' + exam.record.JobListing[i].Location[0].fr + '</span><span class="text-truncate me-3" id = "mode' + i + '"><i class="far fa-clock text-primary me-2"></i>' + exam.record.JobListing[i].Mode[0].fr + '</span><span class="text-truncate me-0" id = "sal' + i + '"><i class="far fa-money-bill-alt text-primary me-2"></i>' + exam.record.JobListing[i].SalaryRange + '</span></div></div><div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center"><div class="d-flex mb-3"><a class="btn btn-light btn-square me-3" href=""></a><a class="btn btn-primary" href="">Apply Now</a></div><small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small></div></div></div>';
              }
      break;
      case "sp":
        for (let i = 0; i < 7; i++) {
          document.getElementById("Title" + i).innerHTML = exam.record.JobListing[i].Role[0].sp;
          document.getElementById("city" + i).innerHTML = "<i class=\"fa fa-map-marker-alt text-primary me-2\"></i>" + exam.record.JobListing[i].Location[0].sp;
          document.getElementById("mode" + i).innerHTML = "<i class=\"far fa-clock text-primary me-2\"></i>" + exam.record.JobListing[i].information[0].sp;
          document.getElementById("sal" + i).innerHTML = "<i class=\"far fa-money-bill-alt text-primary me-2\"></i>" + exam.record.JobListing[i].SalaryRange;
          }
        var txt = "";
        for (let i = 0; i < 5; i++) {
            txt += '<div class="job-item p-4 mb-4"><div class="row g-4"><div class="col-sm-12 col-md-8 d-flex align-items-center"><img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;"><div class="text-start ps-4"><h5 class="mb-3" id = "Title' + i + '">' + exam.record.JobListing[i].Title[0].sp + '</h5><span class="text-truncate me-3" id = "city' + i + '"><i class="fa fa-map-marker-alt text-primary me-2"></i>' + exam.record.JobListing[i].Location[0].sp + '</span><span class="text-truncate me-3" id = "mode' + i + '"><i class="far fa-clock text-primary me-2"></i>' + exam.record.JobListing[i].Mode[0].sp + '</span><span class="text-truncate me-0" id = "sal' + i + '"><i class="far fa-money-bill-alt text-primary me-2"></i>' + exam.record.JobListing[i].SalaryRange + '</span></div></div><div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center"><div class="d-flex mb-3"><a class="btn btn-light btn-square me-3" href=""></a><a class="btn btn-primary" href="">Apply Now</a></div><small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small></div></div></div>';
          }
          case "ch":
            for (let i = 0; i < 7; i++) {
              document.getElementById("Title" + i).innerHTML = exam.record.JobListing[i].Role[0].ch;
              document.getElementById("city" + i).innerHTML = "<i class=\"fa fa-map-marker-alt text-primary me-2\"></i>" + exam.record.JobListing[i].Location[0].ch;
              document.getElementById("mode" + i).innerHTML = "<i class=\"far fa-clock text-primary me-2\"></i>" + exam.record.JobListing[i].information[0].ch;
              document.getElementById("sal" + i).innerHTML = "<i class=\"far fa-money-bill-alt text-primary me-2\"></i>" + exam.record.JobListing[i].SalaryRange;
              }
            var txt = "";
            for (let i = 0; i < 5; i++) {
                txt += '<div class="job-item p-4 mb-4"><div class="row g-4"><div class="col-sm-12 col-md-8 d-flex align-items-center"><img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;"><div class="text-start ps-4"><h5 class="mb-3" id = "Title' + i + '">' + exam.record.JobListing[i].Title[0].ch + '</h5><span class="text-truncate me-3" id = "city' + i + '"><i class="fa fa-map-marker-alt text-primary me-2"></i>' + exam.record.JobListing[i].Location[0].ch + '</span><span class="text-truncate me-3" id = "mode' + i + '"><i class="far fa-clock text-primary me-2"></i>' + exam.record.JobListing[i].Mode[0].ch + '</span><span class="text-truncate me-0" id = "sal' + i + '"><i class="far fa-money-bill-alt text-primary me-2"></i>' + exam.record.JobListing[i].SalaryRange + '</span></div></div><div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center"><div class="d-flex mb-3"><a class="btn btn-light btn-square me-3" href=""></a><a class="btn btn-primary" href="">Apply Now</a></div><small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small></div></div></div>';
              }
  break;
    default:
              for (let i = 0; i < 7; i++) {
                  //console.log(langVar)
                  document.getElementById("Title" + i).innerHTML = exam.record.JobListing[i].Role[0].en;
                  document.getElementById("city" + i).innerHTML = "<i class=\"fa fa-map-marker-alt text-primary me-2\"></i>" + exam.record.JobListing[i].Location[0].en;
                  document.getElementById("mode" + i).innerHTML = "<i class=\"far fa-clock text-primary me-2\"></i>" + exam.record.JobListing[i].information[0].en;
                  document.getElementById("sal" + i).innerHTML = "<i class=\"far fa-money-bill-alt text-primary me-2\"></i>" + exam.record.JobListing[i].SalaryRange;
                  }
                var txt = "";
                for (let i = 0; i < 5; i++) {
                    txt += '<div class="job-item p-4 mb-4"><div class="row g-4"><div class="col-sm-12 col-md-8 d-flex align-items-center"><img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;"><div class="text-start ps-4"><h5 class="mb-3" id = "Title' + i + '">' + exam.record.JobListing[i].Title[0].en + '</h5><span class="text-truncate me-3" id = "city' + i + '"><i class="fa fa-map-marker-alt text-primary me-2"></i>' + exam.record.JobListing[i].Location[0].en + '</span><span class="text-truncate me-3" id = "mode' + i + '"><i class="far fa-clock text-primary me-2"></i>' + exam.record.JobListing[i].Mode[0].en + '</span><span class="text-truncate me-0" id = "sal' + i + '"><i class="far fa-money-bill-alt text-primary me-2"></i>' + exam.record.JobListing[i].SalaryRange + '</span></div></div><div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center"><div class="d-flex mb-3"><a class="btn btn-light btn-square me-3" href=""></a><a class="btn btn-primary" href="">Apply Now</a></div><small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small></div></div></div>';
                }
      
  }
document.getElementById("tab-2").innerHTML = txt + '<a class="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>';
};
let keyy = [{ "X-Master-Key": "$2b$10$CdgigGkb4zu5o5wkNgfDluTAgg7/ca/2Ng4LoPyG8ipCZ87bBlbxS" }];
peformAjaxCAll("GET", "https://api.jsonbin.io/v3/b/644a1eec9d312622a352fb80/latest", keyy, "", JobListing);


//function for explorebycategory
function SearchContainer(exam) {
  var txt2 = '<h1 class="text-center mb-5" >Explore By Category</h1><div class="row g-4" >';
  for (let i = 0; i < 7; i++) {
    txt2 += '<div class="col-lg-3 col-sm-6"><a class="cat-item rounded p-4" href=""><i class="' + exam.record.Categ[i].Logo + '"></i><h6 class="mb-3">' + exam.record.Categ[i].Title + '</h6><p class="mb-0">' + exam.record.Categ[i].Vac + ' Vacancy</p></a></div>';
  }

  txt2 += '</div>'
  document.getElementById("Categ").innerHTML += txt2;
};
let header4 = [{ "X-Master-Key": "$2b$10$CdgigGkb4zu5o5wkNgfDluTAgg7/ca/2Ng4LoPyG8ipCZ87bBlbxS" }];
peformAjaxCAll("GET", "https://api.jsonbin.io/v3/b/6444ce979d312622a3504f74/latest", header4, "", SearchContainer);


//function for blog
function LatestStories(data) {
  switch(langVar) {
    case "en":
      for (let i = 0; i < 20; i++) {
        document.getElementById("blog" + i).innerHTML = data.record.LatestStories[i].Blog[0].en;
        document.getElementById("b-Description" + i).innerHTML = data.record.LatestStories[i].Description[0].en;
      };
      var txt3 = "";
      for (let i = 0; i < 20; i++) {
        txt3 += '<div class="col-xs-2 col-sm-6 col-md-4" data-wow-delay="0.1s" id="output">><a class="cat-item roounded p-4"><img src="img\1.jpg" class="b-img-1"><h3 class="heading1">Blog - '+i+ '"  </h3><span class="text-truncate me-3"><span><p class="blog-heading-1" id="blog">'+data.record.LatestStories[i].Blog[0].en+'</p><p class="blog-text" id="b-Description'+i+ '"></p>'+data.record.LatestStories[i].Description[0].en + '</span><span class="name">Name . Date</span></a> </div>';
      }
      break;
    case "fr":
      for (let i = 0; i < 20; i++) {
        document.getElementById("blog" + i).innerHTML = data.record.LatestStories[i].Blog[0].fr;
        document.getElementById("b-Description" + i).innerHTML = data.record.LatestStories[i].Description[0].fr;
      };
      var txt3 = "";
      for (let i = 0; i < 20; i++) {
        txt3 += '<div class="col-xs-2 col-sm-6 col-md-4" data-wow-delay="0.1s" id="output">><a class="cat-item roounded p-4"><img src="img\1.jpg" class="b-img-1"><h3 class="heading1">Blog - '+i+ '"  </h3><span class="text-truncate me-3"><span><p class="blog-heading-1" id="blog">'+data.record.LatestStories[i].Blog[0].fr+'</p><p class="blog-text" id="b-Description'+i+ '"></p>'+data.record.LatestStories[i].Description[0].fr + '</span><span class="name">Name . Date</span></a> </div>';
      }
      break;
    case "sp":
      for (let i = 0; i < 20; i++) {
        document.getElementById("blog" + i).innerHTML = data.record.LatestStories[i].Blog[0].sp;
        document.getElementById("b-Description" + i).innerHTML = data.record.LatestStories[i].Description[0].sp;
      };
      var txt3 = "";
      for (let i = 0; i < 20; i++) {
        txt3 += '<div class="col-xs-2 col-sm-6 col-md-4" data-wow-delay="0.1s" id="output">><a class="cat-item roounded p-4"><img src="img\1.jpg" class="b-img-1"><h3 class="heading1">Blog - '+i+ '"  </h3><span class="text-truncate me-3"><span><p class="blog-heading-1" id="blog">'+data.record.LatestStories[i].Blog[0].sp+'</p><p class="blog-text" id="b-Description'+i+ '"></p>'+data.record.LatestStories[i].Description[0].sp + '</span><span class="name">Name . Date</span></a> </div>';
      }
        break;
    case "ch":
      for (let i = 0; i < 20; i++) {
        document.getElementById("blog" + i).innerHTML = data.record.LatestStories[i].Blog[0].ch;
        document.getElementById("b-Description" + i).innerHTML = data.record.LatestStories[i].Description[0].ch;
      };
      var txt3 = "";
      for (let i = 0; i < 20; i++) {
        txt3 += '<div class="col-xs-2 col-sm-6 col-md-4" data-wow-delay="0.1s" id="output">><a class="cat-item roounded p-4"><img src="img\1.jpg" class="b-img-1"><h3 class="heading1">Blog - '+i+ '"  </h3><span class="text-truncate me-3"><span><p class="blog-heading-1" id="blog">'+data.record.LatestStories[i].Blog[0].ch+'</p><p class="blog-text" id="b-Description'+i+ '"></p>'+data.record.LatestStories[i].Description[0].ch + '</span><span class="name">Name . Date</span></a> </div>';
      }
      break;
    default:
      for (let i = 0; i < 20; i++) {
        document.getElementById("blog" + i).innerHTML = data.record.LatestStories[i].Blog[0].en;
        document.getElementById("b-Description" + i).innerHTML = data.record.LatestStories[i].Description[0].en;
      };
      var txt3 = "";
      for (let i = 0; i < 20; i++) {
        txt3 += '<div class="col-xs-2 col-sm-6 col-md-4" data-wow-delay="0.1s" id="output">><a class="cat-item roounded p-4"><img src="img\1.jpg" class="b-img-1"><h3 class="heading1">Blog - '+i+ '"  </h3><span class="text-truncate me-3"><span><p class="blog-heading-1" id="blog">'+data.record.LatestStories[i].Blog[0].en+'</p><p class="blog-text" id="b-Description'+i+ '"></p>'+data.record.LatestStories[i].Description[0].en + '</span><span class="name">Name . Date</span></a> </div>';
      }
  }
  document.getElementById("output").innerHTML = txt3;
};
let header3 = [{ "X-Master-Key": "$2b$10$CdgigGkb4zu5o5wkNgfDluTAgg7/ca/2Ng4LoPyG8ipCZ87bBlbxS" }];
peformAjaxCAll("GET", "https://api.jsonbin.io/v3/b/6446748e9d312622a3512535/latest", header3,"",LatestStories);

//function to call testimonial
function Testimonials(exam) {
  switch(langVar) {
    case "en":
        var txt5 = "";
        for (let i = 0; i < 8; i++) {
          //console.log("star");
          txt5 += '<div class="testimonial-item bg-light rounded p-4" id="id_testimonial"><i class="fa fa-quote-left fa-2x text-primary mb-3"></i><p class="Testimonials-data" id="TestimonialsData '+i+ '">'+exam.record.Testimonials[i].Data[0].en+'</p><div class="d-flex align-items-center"><img class="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg"style="width: 50px; height: 50px;"><div class="ps-3"><h5 class="Testimonials-EmployeeName" id="TestimonialsEmployeeName'+i+ '">'+exam.record.Testimonials[i].EmployeeName+'</h5><small class="Testimonials-Position" id="TestimonialsPosition'+i+ '">'+exam.record.Testimonials[i].Position[0].en+'</small></div></div></div>';
        }
      break;
    case "fr":
      for (let i = 0; i < 8; i++) { 
        document.getElementById("TestimonialsData"+i).innerHTML = exam.record.Testimonials[i].Data[0].fr;
        document.getElementById("TestimonialsEmployeeName"+i).innerHTML = exam.record.Testimonials[i].EmployeeName;
        document.getElementById("TestimonialsPosition"+i).innerHTML = exam.record.Testimonials[i].Position[0].fr;
        }
        var txt5 = "";
        for (let i = 0; i < 8; i++) {
          //console.log("star");
          txt5 += '<div class="testimonial-item bg-light rounded p-4" id="id_testimonial"><i class="fa fa-quote-left fa-2x text-primary mb-3"></i><p class="Testimonials-data" id="TestimonialsData '+i+ '">'+exam.record.Testimonials[i].Data[0].fr+'</p><div class="d-flex align-items-center"><img class="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg"style="width: 50px; height: 50px;"><div class="ps-3"><h5 class="Testimonials-EmployeeName" id="TestimonialsEmployeeName'+i+ '">'+exam.record.Testimonials[i].EmployeeName+'</h5><small class="Testimonials-Position" id="TestimonialsPosition'+i+ '">'+exam.record.Testimonials[i].Position[0].fr+'</small></div></div></div>';
        }
      break;
    case "sp":
      for (let i = 0; i < 8; i++) { 
        document.getElementById("TestimonialsData"+i).innerHTML = exam.record.Testimonials[i].Data[0].sp;
        document.getElementById("TestimonialsEmployeeName"+i).innerHTML = exam.record.Testimonials[i].EmployeeName;
        document.getElementById("TestimonialsPosition"+i).innerHTML = exam.record.Testimonials[i].Position[0].sp;
        }
        var txt5 = "";
        for (let i = 0; i < 8; i++) {
          //console.log("star");
          txt5 += '<div class="testimonial-item bg-light rounded p-4" id="id_testimonial"><i class="fa fa-quote-left fa-2x text-primary mb-3"></i><p class="Testimonials-data" id="TestimonialsData '+i+ '">'+exam.record.Testimonials[i].Data[0].sp+'</p><div class="d-flex align-items-center"><img class="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg"style="width: 50px; height: 50px;"><div class="ps-3"><h5 class="Testimonials-EmployeeName" id="TestimonialsEmployeeName'+i+ '">'+exam.record.Testimonials[i].EmployeeName+'</h5><small class="Testimonials-Position" id="TestimonialsPosition'+i+ '">'+exam.record.Testimonials[i].Position[0].sp+'</small></div></div></div>';
        }
        break;
    case "ch":
      for (let i = 0; i < 8; i++) { 
        document.getElementById("TestimonialsData"+i).innerHTML = exam.record.Testimonials[i].Data[0].ch;
        document.getElementById("TestimonialsEmployeeName"+i).innerHTML = exam.record.Testimonials[i].EmployeeName;
        document.getElementById("TestimonialsPosition"+i).innerHTML = exam.record.Testimonials[i].Position[0].ch;
        }
        var txt5 = "";
        for (let i = 0; i < 8; i++) {
          //console.log("star");
          txt5 += '<div class="testimonial-item bg-light rounded p-4" id="id_testimonial"><i class="fa fa-quote-left fa-2x text-primary mb-3"></i><p class="Testimonials-data" id="TestimonialsData '+i+ '">'+exam.record.Testimonials[i].Data[0].ch+'</p><div class="d-flex align-items-center"><img class="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg"style="width: 50px; height: 50px;"><div class="ps-3"><h5 class="Testimonials-EmployeeName" id="TestimonialsEmployeeName'+i+ '">'+exam.record.Testimonials[i].EmployeeName+'</h5><small class="Testimonials-Position" id="TestimonialsPosition'+i+ '">'+exam.record.Testimonials[i].Position[0].ch+'</small></div></div></div>';
        }
      break;
    default:
      for (let i = 0; i < 6; i++) {
        document.getElementById("TestimonialsData"+i).innerHTML = exam.record.Testimonials[i].Data[0].en;
        document.getElementById("TestimonialsEmployeeName"+i).innerHTML = exam.record.Testimonials[i].EmployeeName;
        document.getElementById("TestimonialsPosition"+i).innerHTML = exam.record.Testimonials[i].Position[0].en;
        }
        var txt5 = "";
        
  }
    document.getElementById("nehal").innerHTML = txt5;
  };
  let header1 = [{ "X-Master-Key": "$2b$10$CdgigGkb4zu5o5wkNgfDluTAgg7/ca/2Ng4LoPyG8ipCZ87bBlbxS" }];
  peformAjaxCAll("GET", "https://api.jsonbin.io/v3/b/6446748e9d312622a3512535/latest", header1, " ", Testimonials);
 
 //function to call perks
function perks(exam) {
  switch(langVar) {
    case "en":
       for (let i = 0; i < 6; i++) { 
    document.getElementById("Perk"+i).innerHTML = exam.record.perks[i].Name[0].en;
    document.getElementByzfghjkId("Description"+i).innerHTML = exam.record.perks[i].Description[0].en;
    }
    var txt6 = "";
    for (let i = 0; i < 8; i++) {
      //console.log("star");
       txt6 += '<div class="col-xs-2 col-sm-6 col-md-4"  data-wow-delay="0.1s"> <div class="box"><a class="cat-item rounded p-4" id="p_output" ><i class="fa-solid fa-briefcase-medical fa-2xl"></i><h2 class="heading1">Perks - '+i+ '</h2><p class="perk-heading-1" id="Perk'+i+ '">'+exam.record.perks[i].Name[0].en+'</p><p class="perk-text" id="Description'+i+ '" >'+exam.record.perks[i].Description[0].en+' </p></a></div></div>';
    }
      break;
    case "fr":
       for (let i = 0; i < 6; i++) { 
    document.getElementById("Perk"+i).innerHTML = exam.record.perks[i].Name[0].fr;
    document.getElementById("Description"+i).innerHTML = exam.record.perks[i].Description[0].fr;
    }
     txt6 = "";
    for (let i = 0; i < 8; i++) {
      //console.log("star");
      txt6 += '<div class="col-xs-2 col-sm-6 col-md-4"  data-wow-delay="0.1s"> <div class="box"><a class="cat-item rounded p-4" id="p_output" ><i class="fa-solid fa-briefcase-medical fa-2xl"></i><h2 class="heading1">Perks - '+i+ '</h2><p class="perk-heading-1" id="Perk'+i+ '">'+exam.record.perks[i].Name[0].fr+'</p><p class="perk-text" id="Description'+i+ '" >'+exam.record.perks[i].Description[0].fr+' </p></a></div></div>';
    }
      break;
    case "sp":
         for (let i = 0; i < 6; i++) { 
    document.getElementById("Perk"+i).innerHTML = exam.record.perks[i].Name[0].sp;
    document.getElementById("Description"+i).innerHTML = exam.record.perks[i].Description[0].sp;
    }
     txt6 = "";
    for (let i = 0; i < 8; i++) {
      //console.log("star");
      txt6 += '<div class="col-xs-2 col-sm-6 col-md-4"  data-wow-delay="0.1s"> <div class="box"><a class="cat-item rounded p-4" id="p_output" ><i class="fa-solid fa-briefcase-medical fa-2xl"></i><h2 class="heading1">Perks - '+i+ '</h2><p class="perk-heading-1" id="Perk'+i+ '">'+exam.record.perks[i].Name[0].sp+'</p><p class="perk-text" id="Description'+i+ '" >'+exam.record.perks[i].Description[0].sp+' </p></a></div></div>';
    }
        break;
    case "ch":
           for (let i = 0; i < 6; i++) { 
    document.getElementById("Perk"+i).innerHTML = exam.record.perks[i].Name[0].ch;
    document.getElementById("Description"+i).innerHTML = exam.record.perks[i].Description[0].ch;
    }
     txt6 = "";
    for (let i = 0; i < 8; i++) {
      //console.log("star");
      txt6 += '<div class="col-xs-2 col-sm-6 col-md-4"  data-wow-delay="0.1s"> <div class="box"><a class="cat-item rounded p-4" id="p_output" ><i class="fa-solid fa-briefcase-medical fa-2xl"></i><h2 class="heading1">Perks - '+i+ '</h2><p class="perk-heading-1" id="Perk'+i+ '">'+exam.record.perks[i].Name[0].ch+'</p><p class="perk-text" id="Description'+i+ '" >'+exam.record.perks[i].Description[0].ch+'</p></a></div></div>';
    }
      break;
    default:
       for (let i = 0; i < 6; i++) { 
    document.getElementById("Perk"+i).innerHTML = exam.record.perks[i].Name[0].en;
    document.getElementById("Description"+i).innerHTML = exam.record.perks[i].Description[0].en;
    }
     txt6 = "";
    for (let i = 0; i < 8; i++) {
      //console.log("star");
      txt6 += '<div class="col-xs-2 col-sm-6 col-md-4"  data-wow-delay="0.1s"> <div class="box"><a class="cat-item rounded p-4" id="p_output" ><i class="fa-solid fa-briefcase-medical fa-2xl"></i><h2 class="heading1">Perks - '+i+ '</h2><p class="perk-heading-1" id="Perk'+i+ '">'+exam.record.perks[i].Name[0].en+'</p><p class="perk-text" id="Description'+i+ '" >'+exam.record.perks[i].Description[0].en+' </p></a></div></div>';
    }
  }
    document.getElementById("p_output").innerHTML = txt6;
  };
  let call = [{ "X-Master-Key": "$2b$10$CdgigGkb4zu5o5wkNgfDluTAgg7/ca/2Ng4LoPyG8ipCZ87bBlbxS" }];
  peformAjaxCAll("GET", "https://api.jsonbin.io/v3/b/6446748e9d312622a3512535/latest", call, "", perks);
  


  const xhr = new XMLHttpRequest();

  function setRootColor(jsonData) {
    //alert("function");
    const colors = jsonData.record.colors;
    document.documentElement.style.setProperty("--primary", colors.primary_color); 
    document.documentElement.style.setProperty("--secondary", colors.secondary_color);
    document.documentElement.style.setProperty("--link-color", colors.link_color);
    document.documentElement.style.setProperty("--button-hover-color", colors.button_hover_color);
    document.documentElement.style.setProperty("--font", jsonData.font);
  }
  
  xhr.onreadystatechange = function() {
    console.log("heya")
    if (this.readyState == 4 && this.status == 200) {
      const jsonData = JSON.parse(xhr.responseText);
      // console.log(jsonData)
      setRootColor(jsonData);
    }
  };
  const accessKey = "$2b$10$DBChQ4RtzuvsmE8ineJacO48Yi9fi1Juw5PyGzw5WML12xs75Tys.";
  xhr.open("GET", "https://api.jsonbin.io/v3/b/64450844b89b1e22998fdf26/latest", true);
  xhr.setRequestHeader("X-ACCESS-KEY", accessKey);
  xhr.send(); 


function handleContextMenu(buttonClass, contextMenuId, colorInputId) 
{
  var button = document.getElementsByClassName(buttonClass);
    //var text = document.getElementsByClassName(textClass);
    var contextMenu = document.getElementById(contextMenuId);
    var colorInput = document.getElementById(colorInputId);

    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("contextmenu", function (e) {
        e.preventDefault();
        contextMenu.style.display = "block";
        contextMenu.style.top = e.pageY + "px";
        contextMenu.style.left = e.pageX + "px";
      });
    }
    
    // Call the function with the necessary arguments
    handleContextMenu("button", "context-menu");
    //function to call data from jsons-example to change primary and secondary colours frm the above json
    function applyPageCustomizations() {
      var r = document.querySelector(':root');
      var var1 = JSON.parse(pageCustomazations.colors.primary_color);
      r.style.setProperty('--primary', var1.record.change[0].Color);
      var var1 = JSON.parse(pageCustomazations.colors.secondary_color);
      r.style.setProperty('--secondary', shjkxcvbnm,sdfghjkvar1.record.change[0].Color);
    }
  }

  function addContainerBefore() {
    var container = document.getElementById('add_container');
    var newContainer = document.creajklsdfghteElement('div');
    newContainer.className = 'col-xs-2 xcvbnm,.col-sm-6 col-md-4 bin';
    newContainer.setAttribute('data-wow-delay', '0.1s');
    newContainer.innerHTML = '<a class="cat-item roounded p-4"><img src="img/blog_ex.jpg" class="b-img-1" ><h3 class="heading1" contenteditable="true">add blog number</h3><span class="text-truncate me-3"><p class="blog-heading-1" contenteditable="true">add blog name</p><p class="blog-text" contenteditable="true">add blog description</p></span><span class="name">Name . Date</span></a>';
    container.parentNode.insertBefore(newContainer, container);
  }

  
 

  




























