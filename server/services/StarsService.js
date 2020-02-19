import mongoose from "mongoose";
import Star from "../models/Star";

const _repository = mongoose.model("Star", Star);

class StarsService {
  async getAll() {
    return await _repository.find({});
  }
}

const STARSSERVICE = new StarsService();
export default STARSSERVICE;
