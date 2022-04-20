import { makeAutoObservable } from "mobx";

let currentId = 1;

class Post {
    id = "0";
    title = "mock title";
    content = "mock content";

    constructor(title, content) {
        makeAutoObservable(this);

        this.id = currentId;
        currentId++;

        this.title = title;
        this.content = content;
    }

    update(title, content) {
        this.title = title;
        this.content = content;
    }
}

export default Post;
