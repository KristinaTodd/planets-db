import express from "express";
import starsService from "../services/StarsService";

export default class StarsController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll);
  }

  async getAll(req, res, next) {
    try {
      let data = await starsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}