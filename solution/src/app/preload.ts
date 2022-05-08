import nProgress from "nprogress"
import "nprogress/nprogress.css"
(async () => {
    nProgress.start()
    const app = await import("./main")
    app.default();
    nProgress.done()
})()