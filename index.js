function getDay(date = new Date()) {
  const todayD = new Date(date).toLocaleDateString().split("/");

  if (parseInt(todayD[0]) > 10) return todayD[0];
  else return `0${todayD[0]}`;
}

function getMonth(date = new Date()) {
  const actualMonth = new Date(date).toLocaleDateString().split("/");

  if (parseInt(actualMonth[1]) >= 10) return actualMonth[1];
  else return `0${actualMonth[1]}`;
}

function getYear(date = new Date()) {
  const actualYear = new Date(date).toLocaleDateString().split("/");
  return `${actualYear[2]}`;
}

function formatDate({ format = "dd/mm/yyyy" }) {
  const dateToFormat = new Date().toLocaleDateString();

  switch (format) {
    case "dd/mm/yyyy":
      const newFormatDate = dateToFormat.split("/");

      if (parseInt(newFormatDate[0]) < 10) {
        newFormatDate[0] = `0${newFormatDate[0]}`;
      }

      if (parseInt(newFormatDate[1]) >= 10) {
        const compose = `${newFormatDate[0]}/${newFormatDate[1]}/${newFormatDate[2]}`;
        return compose;
      } else {
        const monthToSet = `0${newFormatDate[1]}`;
        const compose = `${newFormatDate[0]}/${monthToSet}/${newFormatDate[2]}`;
        return compose;
      }
    case "dd/mm/yy":
      const formatDateTwo = dateToFormat.split("/");
      if (parseInt(formatDateTwo[0]) < 10) {
        formatDateTwo[0] = `0${formatDateTwo[0]}`;
      }
      if (parseInt(formatDateTwo[1]) >= 10) {
        const year = formatDateTwo[2];
        const yearToProcess = year.split("").splice(2, 2).join("");
        const composeDateYY = `${formatDateTwo[0]}/${formatDateTwo[1]}/${yearToProcess}`;
        return composeDateYY;
      } else {
        const year = formatDateTwo[2];
        const yearToProcess = year.split("").splice(2, 2).join("");
        const composeDateYY = `${formatDateTwo[0]}/0${formatDateTwo[1]}/${yearToProcess}`;
        return composeDateYY;
      }
    case "yyyy/mm/dd":
      const formatDateThree = dateToFormat.split("/");

      if (parseInt(formatDateThree[0]) < 10) {
        formatDateThree[0] = `0${formatDateThree[0]}`;
      }
      if (parseInt(formatDateThree[1]) < 10) {
        formatDateThree[1] = `0${formatDateThree[1]}`;
      }

      const compose = `${formatDateThree[2]}/${formatDateThree[1]}/${formatDateThree[0]}`;

      return compose;
    case "yy/mm/dd":
      const formatDateFour = dateToFormat.split("/");

      if (parseInt(formatDateFour[0]) < 10) {
        formatDateFour[0] = `0${formatDateFour[0]}`;
      }
      if (parseInt(formatDateFour[1]) < 10) {
        formatDateFour[1] = `0${formatDateFour[1]}`;
      }
      formatDateFour[2] = formatDateFour[2].split("").splice(2, 2).join("");
      const composeFour = `${formatDateFour[2]}/${formatDateFour[1]}/${formatDateFour[0]}`;

      return composeFour;
    case "dd/mm/yyyy/:mm:ss":
      const formatDateFiveDate = new Date().toLocaleDateString().split("/");
      if (parseInt(formatDateFiveDate[0]) < 10) {
        formatDateFiveDate[0] = `0${formatDateFiveDate[0]}`;
      }

      if (parseInt(formatDateFiveDate[1]) < 10) {
        formatDateFiveDate[1] = `0${formatDateFiveDate[1]}`;
      }
      const composeFiveMid = `${formatDateFiveDate[0]}/${formatDateFiveDate[1]}/${formatDateFiveDate[2]}`;
      const formatDateFiveMinutes = new Date()
        .toLocaleTimeString()
        .split(":")
        .splice(0, 2)
        .join(":");
      const composeFiveEnd = `${composeFiveMid} ${formatDateFiveMinutes}`;
      return composeFiveEnd;
    default:
      return console.log("Option Not Found");
  }
}
formatDate({ format: "dd/mm/yy" });
module.exports = {
  getDay,
  getMonth,
  getYear,
  formatDate,
};
