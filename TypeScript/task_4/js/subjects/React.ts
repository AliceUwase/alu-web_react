// namespace Subjects for React subject
namespace Subjects {

    export interface Teacher {
        experienceTeachingReact?: number;

    }
    // React class that extends Subject class
    export class React extends Subject {
        // Method to get the requirements for React subject
        getRequirements(): string {
            return "Here is the list of requirements for React"
        }
        // Method to get the available teacher for React subject
        getAvailableTeacher (): string {
        
        // Check if the teacher is available and has experience teaching React
        if (this.teacher && this.teacher.experienceTeachingReact !== undefined && this.teacher.experienceTeachingReact > 0) {
            return 'Available Teacher ${this.teacher.firstName}'
        } else {  
            return "No Available teacher"
       } 
    }
        
    }
}