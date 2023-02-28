// var arr = {
//   page: 1,
//   count: 0,
// };

// var timerInterval;
// let page = 0;

// function show() {
//   console.log(arr);
// }

// function stop() {
//   clearInterval(timerInterval);
// }

// function timer() {
//   let count = 0;

//   timerInterval = setInterval(function () {
//     count = count + 1;
//     console.log(`page_${page} Timer count: ${count}`);
//     return count;
//   }, 1000, count);

// }

// function right() {
//   stop();
//   page = page + 1;
//   console.log("Right:", page);
//   document.getElementById(
//     "pdf"
//   ).innerHTML = `<embed src="page_${page}.pdf" width="100%" height="600">`;

//   timer();
// }

// function left() {
//   stop();
//   page = page - 1;
//   console.log("Left:", page);
//   document.getElementById(
//     "pdf"
//   ).innerHTML = `<embed src="page_${page}.pdf" width="100%" height="600">`;

//   if (page < 1) {
//     page = 0;
//     document.getElementById(
//       "pdf"
//     ).innerHTML = `<embed src="page_1.pdf" width="100%" height="600">`;
//   }

//   timer();
// }

var arr = {
  page: null,
  time: null,
};

var details = [];

var timerInterval;
let page = 0;

function show() {
  // details.push({"page":arr.page, "time":arr.time})
  stop();

  console.log(details);
}

function stop() {
  clearInterval(timerInterval);
}

function timer() {
  let count = 0;
  arr.page = page;
  arr.time = 0;
  timerInterval = setInterval(function () {
    count = count + 1;

    // arr.page = page

    if (details.some((item) => item.page === page)) {
      // console.log("found")

      let index = details.findIndex((item) => item.page === page);
      details[index].time += 1;
      arr.time += 1;
    } else {
      arr.time = count;
      details.push({ page: arr.page, time: arr.time });
    }

    console.log("Page:", page, "Time:", count, "seconds");
  }, 1000);
}

function right() {
  // details.push(arr)

  stop();

  page = page + 1;
  arr.page = page;
  console.log("Right:", page);
  document.getElementById(
    "pdf"
  ).innerHTML = `<embed src="page_${page}.pdf" width="100%" height="600">`;

  timer();
}

function left() {
  stop();

  page = page - 1;
  arr.page = page;
  console.log("Left:", page);
  document.getElementById(
    "pdf"
  ).innerHTML = `<embed src="page_${page}.pdf" width="100%" height="600">`;

  if (page < 1) {
    page = 0;
    document.getElementById(
      "pdf"
    ).innerHTML = `<embed src="page_1.pdf" width="100%" height="600">`;
  }

  timer();
  // details.push({"page":arr.page, "time":arr.time})
}
