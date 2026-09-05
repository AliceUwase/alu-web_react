// Define the Teacher interface with the specified properties
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: string | number | boolean;
}

// function to return the first letter of the firstName and the full lastName
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

// Define the type for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
    
}