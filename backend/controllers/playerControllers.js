import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";

const Player = mongoose.model("Player", PlayerSchema);

//Add New Player
export const addNewPlayer = async (req, res) => {
  try {
    const newPlayer = new Player(req.body);
    await newPlayer.save();
    res.status(200).json(newPlayer);
  } catch (error) {
    res.status(401).json({ err: error.message });
  }
};

//Get all Player
export const getAllPlayers = async (req, res) => {
  try {
    const player = await Player.find();
    res.status(200).json(player);
  } catch (err) {
    res.status(401).json({ err: err.message });
  }
};

//GET player by ID
export const getPlayerByID = async (req, res) => {
  try {
    console.log("PARAMS: ", req.params);
    const player = await Player.find({ _id: req.params.id });
    res.json(player);
  } catch (err) {
    res.status(401).json({ err: err.message });
  }
};

//UPDATE Player
export const updatePlayer = async (req, res) => {
  try {
    const query = {
      _id: req.params.id,
    };
    const updateReq = req.body;
    await Player.findOneAndUpdate(query, updateReq);
    const player = await Player.find(query);
    res.status(200).json(player);
  } catch (err) {
    res.status(401).json({ err: err.message });
  }
};
//DElete BY ID
export const deletePlayerById = async (req, res) => {
  try {
    const id = req.params.id;
    await Player.deleteOne({ _id: id });
    res.status(200).send("DELETED");
  } catch (err) {
    res.status(401).json({ err: err.message });
  }
};

//DELETE ALL
export const deleteAllPlayer = async (req, res) => {
  try {
    await Player.deleteMany({});
    res.status(200).send("DELETED");
  } catch (err) {
    res.status(401).json({ err: err.message });
  }
};
