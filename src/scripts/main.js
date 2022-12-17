// JS

console.log('main.js source');
// document.getElementById('test').classList.add('doron');


// pricing
const pricingTable = document.querySelector('.pricing-table');
const halfYearColumn = document.querySelector('.half-year');
const threeMonthsColumn = document.querySelector('.three-months');
const monthlyColumn = document.querySelector('.monthly');
const toggleButtons = document.querySelectorAll('.toggle');

// Function to update the pricing table for the selected subscription option
const updatePricingTable = (newState) => {
  if (newState === 'half-year') {
    halfYearColumn.innerHTML = `
      <h3>Half Year</h3>
      <p>6 months</p>
      <h4>$99</h4>
    `;
    threeMonthsColumn.innerHTML = `
      <h3>Three Months</h3>
      <p>3 months</p>
      <h4>$79</h4>
    `;
    monthlyColumn.innerHTML = `
      <h3>Monthly</h3>
      <p>1 month</p>
      <h4>$29</h4>
    `;
  } else if (newState === 'three-months') {
    halfYearColumn.innerHTML = `
    <h3>Monthly</h3>
    <p>1 month</p>
    <h4>$29</h4>
    `;
  }
}



// const elements = document.querySelectorAll(".custom-switch");

// for (const [i, element] of Array.from(elements).entries()) {
//   const {className, id, name} = element;

//   const wrapper = document.createElement("div");
//   wrapper.className = "custom-switch";
//   wrapper.id = name;
//   element.parentNode.insertBefore(wrapper, element);
//   wrapper.appendChild(element);

//   const label = document.createElement("label");
//   label.setAttribute("for", `custom-switch-${i}`);
//   element.parentNode.insertBefore(label, element.nextSibling);

//   element.setAttribute("id", `custom-switch-${i}`);
//   element.setAttribute("name", name);
// }

// for (const element of Array.from(document.querySelectorAll(".custom-switch input"))) {
//   element.addEventListener("change", () => {
//     const value = element.value;
//     for (const el of Array.from(document.querySelectorAll(".pricing-tables"))) {
//       el.className = `pricing-tables plans--${value}`;
//     }
//   });
// }

// const elements = document.querySelectorAll(".custom-switch");

// for (const [i, element] of Array.from(elements).entries()) {
//   const {className, id, name} = element;

//   const wrapper = document.createElement("div");
//   wrapper.className = "custom-switch";
//   wrapper.id = name;
//   element.parentNode.insertBefore(wrapper, element);
//   wrapper.appendChild(element);

//   const label = document.createElement("label");
//   label.setAttribute("for", `custom-switch-${i}`);
//   element.parentNode.insertBefore(label, element.nextSibling);

//   element.setAttribute("id", `custom-switch-${i}`);
//   element.setAttribute("name", name);
// }

// for (const element of Array.from(document.querySelectorAll(".custom-switch input"))) {
//   element.addEventListener("change", () => {
//     for (const el of Array.from(document.querySelectorAll(".pricing-tables"))) {
//       el.classList.toggle("plans--annually");
//     }
//   });
// }
