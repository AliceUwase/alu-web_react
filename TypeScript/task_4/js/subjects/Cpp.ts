/// <reference path="Subject.ts" />

// namespace Subjects for Cpp subject
namespace Subjects{
    export interface Teacher {
    experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }
        getAvailableTeacher(): string {
        // Check if the teacher is available and has experience teaching Cpp
        if 
        (this.teacher.experienceTeachingC === 0 || this.teacher.experienceTeachingC === undefined) {
            return 'No available teacher';
        }  else {
            return 'Available Teacher: ${this.teacher.firstName}';
        }
    }
    }
}
