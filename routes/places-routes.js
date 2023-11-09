const express = require("express");

const router = express.Router();
const DUMMY_PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://images.unsplash.com/photo-1624171156512-077b7a150e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
    title: "Pullman Zamzam Makkah",
    description: "A place is looking good",
    address:
      "Complex King, Diamond Tower, Abdel Aziz Endowment, Al Haram, Mecca 21955, Saudi Arabia",
    creator: "u1",
    location: {
      lat: 21.4193627,
      long: 39.8265113,
    },
  },
  {
    id: "p2",
    imageUrl:
      "https://images.unsplash.com/photo-1540866225557-9e4c58100c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=395&q=80",
    title: "MADINAH MOVENPICK HOTEL",
    description: "A place of beauty",
    address: "ANWAR AL MADINAH MOVENPICK HOTEL MADINA AL MUNAWARAH KSA",
    creator: "u2",
    location: {
      lat: 24.4714358,
      long: 39.6074949,
    },
  },
];

router.get("/:pid", (req, res) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return (p.id == placeId);
  });
  if(!place) {
    const error = new Error('Unable to find a place with id ' + placeId)
    error.code = 404
    throw error;
  }
  res.json({ place });
});

router.get('/user/:uid', (req, res, next) => {
    const userId = req.params.uid;
    const places = DUMMY_PLACES.find(p => p.creator == userId);
    if(!places) {
        const error = new Error('Unable to find a place for  ' + userId)
        error.code = 404
        return next(error);
      }
    res.json({ places });
})

module.exports = router;
