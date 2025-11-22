// insert workplace

const { User } = require("../models/User");
const { Workplace } = require("../models/Workplace");
const {HttpError} = require("../utils/utils")

class WorkplaceService {

 static async getUserWorkplaces(googleId) {
  const user = await User.findOne({ googleId });
  if (!user) {
    throw new HttpError(404, "User not found");
  }
  
  const workplaces = await Workplace.find({ userId: user._id });
  
  return workplaces.map(job => ({
    workplace: job.workplace,
    hourlyRate: job.hourlyRate,
    workplaceId: job._id
  }));
}

  static async deleteWorkplace(googleId, workplaceId) {
    const user = await User.findOne({ googleId });
    if (!user) {
      throw new HttpError(404, "User not found");
    }

    const result = await Workplace.deleteOne({
      _id: workplaceId,
      userId: user._id
    });

    if (result.deletedCount === 0) {
      throw new HttpError(404, "Workplace not found");
    }

    return { deleted: true };
  }

static async addWorkplace(googleId, workplace, hourlyRate) {
  const user = await User.findOne({ googleId });
  if (!user) {
    throw new HttpError(404, "User not found");
  }
  
  const newWorkplace = new Workplace({
    userId: user._id,
    workplace,
    hourlyRate,
  });
  
  await newWorkplace.save();
  return newWorkplace;
}

}

class WorkplaceController {
  static async remove(req, res) {
    const { googleId } = req.userInfo;
    const { workplaceId } = req.params;

    if (!workplaceId) {
      throw new HttpError(400, "workplaceId is required");
    }

    const result = await WorkplaceService.deleteWorkplace(googleId, workplaceId);
    res.json(result);
  }


  static async add(req, res) {
    const { workplace, hourlyRate } = req.body;
    const { googleId } = req.userInfo;

    try {
      const newWorkplace = await WorkplaceService.addWorkplace(googleId, workplace, hourlyRate);
      res.json(newWorkplace);
    } catch (err) {
      throw new HttpError(500, "Error adding workplace");
    }

  };

  static async get(req, res) {
    const { googleId } = req.userInfo;

    try {
      const data = await WorkplaceService.getUserWorkplaces(googleId);
      res.json(data)
    } catch (err) {
      throw new HttpError(500, "Error fetching workplace");
    }

  }
}

module.exports = { WorkplaceController }