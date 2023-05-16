import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "35bb7063c18d4d89b9d4237dfc081406"
    }
})