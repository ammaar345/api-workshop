const carsElem = document.querySelector(".cars");
const carList = document.querySelector(".carList");
const carsTemplateText = document.querySelector(".carsTemplate").innerHTML;
const carsTemplate = Handlebars.compile(carsTemplateText);

const colorElem = document.querySelector(".colors");
const colorList = document.querySelector(".colorList");
const colorTemplateText = document.querySelector(".colorTemplate").innerHTML;
const colorTemplate = Handlebars.compile(colorTemplateText);


const  allElem= document.querySelector(".allC");
const allCars = document.querySelector(".allCarList");
const allCarTemplateText = document.querySelector(".allCarTemplate").innerHTML;
const allCarTemplate = Handlebars.compile(allCarTemplateText);

//get data in browser
axios.get("http://api-tutor.herokuapp.com/v1/makes").then(function (result) {
  console.log(result);
  carList.innerHTML = carsTemplate({
    cars: result.data,
  });
});
axios.get("http://api-tutor.herokuapp.com/v1/colors").then(function (result) {
  console.log(result);
  colorList.innerHTML = colorTemplate({
    color: result.data,
  });
});
axios.get("http://api-tutor.herokuapp.com/v1/cars").then(function (result) {
  console.log(result);
  allCars.innerHTML = allCarTemplate({
    all: result.data,
  });
});
// axios.get("http://api-tutor.herokuapp.com/v1/cars").then(function (result) {
//   console.log(result);
//   allCars.innerHTML = allCarTemplate({
//     all: result.data,
//   });
// });

// <table>
// <tr>
// 	<th>Make</th>
// 	<th>Color</th>
// 	<th>Model</th>
// 	<th>Price</th>
// 	<th>Registration</th>

// </tr>
// <tr>

		
// <td><ul>{{this.make}}	</ul></td>
// <td><ul>{{this.make}}	</ul></td>
// <td><ul>{{this.make}}	</ul></td>
// <td><ul>{{this.make}}	</ul></td>
// <td><ul>{{this.make}}	</ul></td>

// </tr>

// 		</table>
// 		{{/each}}
