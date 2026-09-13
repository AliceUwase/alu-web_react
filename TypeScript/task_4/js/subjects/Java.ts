namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }
    // Java class that extends Subject class
    export class Java extends Subject {

            getRequirements(): string {
                return "Here is the list of requirements for Java"
        }
            getAvailableTeacher(): string {
                
        // Check if the teacher is available and has experience teaching Java
            if (this.teacher && this.teacher.experienceTeachingJava !== undefined && this.teacher.experienceTeachingJava > 0 ) {
                return 'Available Teacher: ${this.teacher.firstName}'
        }   else {
                return "No available teacher"
        }

        }
        }
    

}
