import express from "express"; // const express = require("express");

const app = express();

const PORT = 4000;

const rooms = [
  {
    id: "99",
    seats: 4,
    amenities: "toothpaste,waterbottle,waterheater,towels",
    priceperday: 3500,
    roomId: "101",
    roomName: "master",
    bookedStatus: "Booked",
    customername: "Ragu",
    date: "1-12-2022",
    starttime: "11am",
    endtime: "10am",
  },
  {
    id: "100",
    seats: 4,
    amenities: "toothpaste,waterbottle,waterheater,towels",
    priceperday: 3500,
    roomId: "102",
    roomId: "master",
    bookedStatus: "Not Booked",
    customername: "Ravi",
    date: "13-12-2022",
    starttime: "11am",
    endtime: "10am",
  },
  {
    id: "101",
    seats: 4,
    amenities: "toothpaste,waterbottle,waterheater,towels",
    priceperday: 4200,
    roomId: "103",
    roomName: "executive",
    bookedStatus: "Booked",
    customername: "Tom",
    date: "17-12-2022",
    starttime: "11am",
    endtime: "10am",
  },
  {
    id: "102",
    seats: 4,
    amenities: "toothpaste,waterbottle,waterheater,towels",
    priceperday: 4200,
    roomId: "104",
    roomName: "executive",
    bookedStatus: "Booked",
    customername: "Ram",
    date: "21-12-2022",
    starttime: "11am",
    endtime: "10am",
  },
  {
    id: "103",
    seats: 4,
    amenities: "toothpaste,waterbottle,waterheater,towels",
    priceperday: 3500,
    roomId: "105",
    roomName: "master",
    bookedStatus: "Not Booked",
    customername: "Sam",
    date: "24-12-2022",
    starttime: "11am",
    endtime: "10am",
  },
  {
    id: "104",
    seats: 4,
    amenities: "toothpaste,waterbottle,waterheater,towels",
    priceperday: 4200,
    roomId: "106",
    roomName: "executive",
    bookedStatus: "Not Booked",
    customername: "Anto",
    date: "26-12-2022",
    starttime: "11am",
    endtime: "10am",
  },
  {
    id: "105",
    seats: 4,
    amenities: "toothpaste,waterbottle,waterheater,towels",
    priceperday: 3500,
    roomId: "107",
    roomName: "master",
    bookedStatus: "Booked",
    customername: "Gokul",
    date: "11-12-2022",
    starttime: "11am",
    endtime: "10am",
  },
  {
    id: "106",
    seats: 4,
    amenities: "toothpaste,waterbottle,waterheater,towels",
    priceperday: 3500,
    roomId: "108",
    roomName: "master",
    bookedStatus: "Booked",
    customername: "Saro",
    date: "29-12-2022",
    starttime: "11am",
    endtime: "10am",
  },
];
// http://localhost:4000
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

//GET all Rooms

app.get("/rooms", function (request, response) {
  response.send(rooms);
});

// 1 : Creating rooom with // http://localhost:4000/roomdetails
app.get("/roomdetails", function (request, response) {
  response.send({
    id: "10",
    seats: 4,
    amenities: "toothpaste,waterbottle,waterheater,towels",
    priceperhour: 600,
  });
});

// 2 : Booking a Room with Id  http://localhost:4000/rooms/99

app.get("/rooms/:roomId", function (request, response) {
  const { roomId } = request.params;
  console.log(request.params, roomId);
  const result = rooms.find((rm) => rm.roomId == roomId);
  response.send(result);
});

// 3 : List all rooms with Booked date  http://localhost:4000/rooms/date

app.get("/rooms/:date", function (request, response) {
  const { date } = request.params;
  console.log(request.params, date);
  const resultDate = rooms.filter((dt) => dt.date == date);
  response.send(resultDate);
  !resultDate
    ? response.send(resultDate)
    : response.status(404).send({ message: "Not Found" });
});

// 4 : list all the customers with booded data  http://localhost:4000/rooms/bookedStatus

app.get("/rooms/:bookedStatus", function (request, response) {
  const { bookedStatus } = request.params;
  console.log(request.params, bookedStatus);
  const bookedStat = rooms.find((bs) => bs.bookedStatus == bookedStatus);
  response.send(bookedStat);
});
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
