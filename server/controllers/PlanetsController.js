import express from "express";
import planetsService from "../services/PlanetsService";

export default class PlanetsController {

  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);

  }

  async getAll(req, res, next) {
    try {
      let data = await planetsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await planetsService.findById(req.params.id);
      res.send(data)
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await planetsService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await planetsService.update(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await planetsService.delete(req.params.id);
      res.send("Deleted")
    } catch (error) {
      next(error);
    }
  }
}