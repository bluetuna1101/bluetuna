const fs = require("fs")

obj = {
  title: `회원가입을 환영합니다`,

}
let data = fs.readFileSync("./mail_template.html", "utf-8")
let temp1 = data
Object.keys(obj).forEach((el) => {
  // 1. el 'title'
  // 2. value '{title}'
  // 3. '{title}' => obj[el] = `회원가입을 환영합니다`
  const value = "{" + el + "}"
  const regEx = new RegExp(value, "gi")
  temp1 = temp1.replace(regEx, obj[el])
})
// console.log(temp1)

fs.writeFileSync("new_mail.html", temp1, "utf-8") // 이걸 새 파일 만들지말고 리턴으로 해서 파일경로 적어주면 됨

