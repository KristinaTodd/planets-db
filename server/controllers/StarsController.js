import express from "express";
import starsService from "../services/StarsService";
import planetsService from "../services/PlanetsService";

export default class StarsController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .get("/:id/planets", this.getPlanetsByStarId)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await starsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await starsService.findById(req.params.id);
      res.send(data)
    } catch (error) {
      next(error);
    }
  }

  async getPlanetsByStarId(req, res, next) {
    try {
      let data = await planetsService.getByStarId(req.params.id);
      res.send(data)
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await starsService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await starsService.update(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await starsService.delete(req.params.id);
      res.send("Deleted")
    } catch (error) {
      next(error);
    }
  }
}