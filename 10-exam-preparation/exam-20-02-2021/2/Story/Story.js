class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this.commentId = 0;
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }

    get comments() {
        return this._comments;
    }

    like(username) {
        if (username == this.creator) {
            throw new Error('You can\'t like your own story!');
        }

        if (this._likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        }
        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (this._likes.includes(username) == false) {
            throw new Error("You can't dislike this story!");
        }

        const userIndex = this._likes.findIndex(u => u == username);
        this._likes.splice(userIndex, 1);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {

        if (id == undefined || this.comments.some(c => c.id == id) == false) {
            this.commentId += 1;
            this.comments.push(
                {
                    id: this.commentId,
                    username,
                    content,
                    replies: []
                }
            );

            return `${username} commented on ${this.title}`;
        }

        const currentComment = this.comments.find(c => c.id == id);
        currentComment.replies.push(
            {
                id: Number(id) + (currentComment.replies.length + 1) / 10,
                username,
                content
            }
        )

        return `You replied successfully`;
    }

    toString(sortingType) {
        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`;
        
        if (sortingType == 'asc') {
            this.comments
            .sort((a, b) => a.id - b.id)
            .sort(a => a.replies.sort((a, b) => a.id - b.id));   
        } else if (sortingType == 'desc') {
            this.comments
            .sort((a, b) => b.id - a.id)
            .sort(a => a.replies.sort((a, b) => b.id - a.id));
        } else if (sortingType == 'username') {
            this.comments
            .sort((a, b) => a.username.localeCompare(b.username))
            .sort(a => a.replies.sort((a, b) => a.username.localeCompare(b.username)));
        }

        for (let comment of this.comments) {
            result += `\n-- ${comment.id}. ${comment.username}: ${comment.content}`
            if (comment.replies.length > 0) {
                for (let reply of comment.replies) {
                    result += `\n--- ${reply.id}. ${reply.username}: ${reply.content}`;
                }
            }
        }

        return result;
    }
}

let art = new Story("My Story", "Anny");
console.log(art.likes);
art.like("John");
console.log(art.likes);
art.like("Ivan");
art.like("Atanas");
console.log(art.like('Tunio'));
console.log(art.likes);
console.log(art.dislike("John"));
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
console.log(art.comment('Dicho', 'Reply', 2));
art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));
