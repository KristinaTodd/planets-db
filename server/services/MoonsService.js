import mongoose from "mongoose";
import Moon from "../models/Moon";

const _repository = mongoose.model("Moon", Moon);

class MoonsService {

  async getAll() {
    return await _repository.find({});
  }

  async findById(id) {
    return await _repository.findById(id);
  }

  async getByPlanetId(id) {
    return await _repository.find({ planetId: id })
  }

  async create(rawData) {
    return await _repository.create(rawData);
  }

  async update(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true })
  }
  async delete(id) {
    await _repository.findByIdAndDelete(id)
  }
}

const MOONSERVICE = new MoonsService();
export default MOONSERVICE;
