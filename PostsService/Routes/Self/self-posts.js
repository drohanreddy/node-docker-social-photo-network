class SelfPosts {

    getSelfPosts(req, res) {
        res.json( {
            result: 200,
            Posts: [
                {
                    ID: 123,
                    Image: "",
                    Likes: 24,
                    Comments: []
                }

            ]
        });
    }
}

module.exports = SelfPosts;
