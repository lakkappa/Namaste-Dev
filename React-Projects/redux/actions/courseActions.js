export function createCourse(course) {
    //Step-1: Create Action
    return {
        type: "CREATE_COURSE",
        course
    };
}