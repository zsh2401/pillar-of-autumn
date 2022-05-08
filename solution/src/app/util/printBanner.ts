import figlet from "figlet"
export default function () {
    figlet.text("Will you love me", (err, data) => {
        console.log(data)
    })
}