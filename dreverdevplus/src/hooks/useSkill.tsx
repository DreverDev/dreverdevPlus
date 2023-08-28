import connection from "@/database/connection";
import { SkillType } from "@/types";
import Skill from "@/database/models/Skill";

export const useSkill = () => {
    const getAll = async () => {
        try {
            const response = await fetch('/api/skill/getSkills');
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error);
        }
    }

    return ({
        getAll,
    })
}