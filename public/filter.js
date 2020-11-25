const displayElem = document.querySelector(".display");
const filtered = document.querySelector(".filteredList");
const filterTemplateText = document.querySelector(".filter").innerHTML;
const filterTemplate = Handlebars.compile(filterTemplateText);

const carMake = document.querySelector(".make");
const filteredMake = document.querySelector(".filteredList2");
const filterTemplateTextMake = document.querySelector(".filterMake").innerHTML;
const filterTemplateMake = Handlebars.compile(filterTemplateTextMake);

const colorCar = document.querySelector(".color");
const filteredMain = document.querySelector(".filteredList3");
const filterTemplateTextMain = document.querySelector(".filterMain").innerHTML;
const filterTemplateMain = Handlebars.compile(filterTemplateTextMain);

const btnElem = document.querySelector(".btnFilter");



axios.get("http://api-tutor.herokuapp.com/v1/colors").then(function (result) {
  colorCar.innerHTML = filterTemplate({

    carColor: result.data

  });

});
axios.get("http://api-tutor.herokuapp.com/v1/makes").then(function (result) {
  carMake.innerHTML = filterTemplateMake({

    make: result.data

  });

});

// axios.get("http://api-tutor.herokuapp.com/v1/cars/make/:make/color/:car_color").then(function (result) {
//   filteredMain.innerHTML = filterTemplateMain({

//     main: result.data

//   });

// });
btnElem.addEventListener("click", function () {
  var selectColor = colorCar.value
  var selectMake = carMake.value

  axios.get('http://api-tutor.herokuapp.com/v1/cars/make/' + selectMake).then(function (result) {
    filteredMain.innerHTML=filterTemplateMain({
      main: result.data
    })

  })
  
  axios.get('http://api-tutor.herokuapp.com/v1/cars/color/' + selectColor).then(function (result) {
    filteredMain.innerHTML=filterTemplateMain({
      main: result.data
    })

  }) 

  axios.get('http://api-tutor.herokuapp.com/v1/cars/make/'+selectMake+'/color/'+ selectColor).then(function (result) {
    filteredMain.innerHTML=filterTemplateMain({
      main: result.data
    })

  })


  console.log(selectMake)
  console.log(selectColor)
})