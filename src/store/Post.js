import { makeAutoObservable } from "mobx";

let postsCounter = 1;

class Post {
    id = "0";
    title = "mock title";
    content = "mock content";

    constructor(title, content) {
        makeAutoObservable(this);

        this.id = postsCounter;
        postsCounter++;

        this.title = title;
        this.content = content;
    }
}

export default Post;
