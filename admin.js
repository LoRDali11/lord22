import { db, collection, addDoc } from "./firebase.js";

async function addCourse(courseData) {
    try {
        const docRef = await addDoc(collection(db, "courses"), courseData);
        console.log("Course added with ID: ", docRef.id);
        alert("تمت إضافة الدورة بنجاح!");
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}