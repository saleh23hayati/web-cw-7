// project أنشئ كائن
const project = {
type: "tech",
users: 1000,
biography() {
    return "this is my project"
}

}
// randomProperty أنشئ دالة
function randomProperty(obj) {
const keys = object.keys(obj);
const random = Math.floor(Math.random() * keys.length);
console.log(keys[random]);
console.log(obj[`${keys[random]}`]);


}
randomProperty(project);