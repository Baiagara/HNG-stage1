document.addEventListener("DOMContentLoaded", () => {
  const utcTimeElement = document.getElementById("utc-time");
  const currentDayElement = document.getElementById("current-day");

  function updateTimeAndDay() {
    const now = new Date();

    const utcTime = now.toUTCString().match(/\d{2}:\d{2}:\d{2}/)[0];
    utcTimeElement.textContent = utcTime;

    const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });
    currentDayElement.textContent = currentDay;
  }

  updateTimeAndDay();

  setInterval(updateTimeAndDay, 1000);
});
