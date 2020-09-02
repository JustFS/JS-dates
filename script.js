const today = new Date().toISOString().split("T")[0];
const start = document.getElementById("start_date");
const end = document.getElementById("end_date");

start.value = today;
start.min = today;

const tomorrowDate = (e) => {
    let day = new Date(today);
    day.setDate(day.getDate() + 1);
    let tomorrow = day.toISOString().split("T")[0];
    end.min = tomorrow;
    end.value = tomorrow;
};
tomorrowDate();

start.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  day.setDate(day.getDate() + 1);
  let value = day.toISOString().split("T")[0];
  end.min = value;
});

end.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  day.setDate(day.getDate() - 1);
  let value = day.toISOString().split("T")[0];
  start.max = value;
});

const bookingTotal = () => {
  let date1 = new Date(start.value);
  let date2 = new Date(end.value);
  let diffTime = Math.abs(date2 - date1);
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let nightPrice = document.getElementById("nightPrice").innerHTML;

  let total = diffDays * nightPrice;
  total
    ? (document.getElementById("total").innerHTML = total)
    : (document.getElementById("total").innerHTML = 0);
};
start.addEventListener("change", () => {
  bookingTotal();
});
end.addEventListener("change", () => {
  bookingTotal();
});
bookingTotal();