import {Schema, model, models} from "mongoose";

const ExperienceSchema = new Schema({
    name: String,
    desc_en: String,
    desc_es: String,
    endDate: Number,
    startDate: Number,
    company: String,
    image: String,
    sector: String,
    skills: [{
        type: Schema.Types.ObjectId,
        ref: "Skill",
    }],
});

export default models.Experience || model("Experience", ExperienceSchema, "experience");