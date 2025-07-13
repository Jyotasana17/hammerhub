// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//   for (currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = "selected";
//     }
//     select.append(newOption);
//   }

//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }

// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;
//   if (amtVal === "" || amtVal < 1) {
//     amtVal = 1;
//     amount.value = "1";
//   }
//   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//   let response = await fetch(URL);
//   let data = await response.json();
//   let rate = data[toCurr.value.toLowerCase()];

//   let finalAmount = amtVal * rate;
//   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// };

// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };

// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// window.addEventListener("load", () => {
//   updateExchangeRate();
// });

// // Get form and elements
//     const form = document.getElementById('multiplyForm');
//     const resultDisplay = document.getElementById('result');

//     // Add event listener
//     form.addEventListener('submit', function(event) {
//       event.preventDefault(); // Prevent form from submitting normally

//       const num1 = parseFloat(document.getElementById('num1').value);
//       const num2 = parseFloat(document.getElementById('num2').value);

//       if (!isNaN(num1) && !isNaN(num2)) {
//         const product = num1 * num2;
//         resultDisplay.textContent = Result: ${product};
//       } else {
//         resultDisplay.textContent = 'Please enter valid numbers.';
//       }
    // });

    const form = document.getElementById('estimator-form');
        const resultDiv = document.getElementById('result');
        const errorDiv = document.getElementById('error');

        form.addEventListener('estimate-btn', (e) => {
            e.preventDefault();

            const city = document.getElementById('city').value;
            const areaSqft = document.getElementById('area').value;

            fetch('/estimate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ city, areaSqft })
            })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    errorDiv.innerText = data.error;
                    resultDiv.innerText = '';
                } else {
                    resultDiv.innerText = `Estimated construction cost in ${data.city} for ${data.area_sqft} sq ft: ${data.estimated_cost}`;
                    errorDiv.innerText = '';
                }
            })
            .catch((error) => console.error(error));
        });
