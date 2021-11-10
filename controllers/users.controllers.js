import express from "express";
import mongoose from "mongoose";

import User from "../models/User.js";

export const getUsers = function (req, res) {
  User.find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database " + err);
    });
};

export const getUser = function (req, res) {
  User.findById(req.params.id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to find the User " + err);
    });
};

export const createUser = function (req, res) {
  let newUser = new User(req.body);
  newUser
    .save()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database " + err);
    });
};

export const updateUser = function (req, res) {
  User.findByIdAndUpdate(req.body._id, req.body)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to update the User " + err);
    });
};

export const deleteUser = function (req, res) {
  User.findByIdAndDelete(req.params.id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to delete the User " + err);
    });
};
