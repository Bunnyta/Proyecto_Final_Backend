import { courseModel } from "./course.model.js";

const create = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const newCourse = await courseModel.create({
      name,
      description,
      price,      
      user_id: req.user_id,
    });

    return res.status(201).json(newCourse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
    const { course_id } = req.params;
    try {
        const course = await courseModel.findOne(course_id);
        if(!course) {
            return res.status(404).json({ error: "Course not found"});
        }
        if(course.user_id !== req.user_id) {
            return res.status(401).json({ error: "You are not allowed"});
        }

        const courseRemoved= await courseModel.remove(course_id);
        return res.status(200).json(courseRemoved);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
        
    }
}
export const courseController ={
    create,
    remove
};