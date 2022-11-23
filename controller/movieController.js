const movie = require('../model/movie');

module.exports.index = (req, res, next) => {
    movie.findAll().then(movies => {
        res.render('movie-index', {
            data: movies
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('movie-create');
}

module.exports.createPost = (req, res, next) => {
    movie.create({
            name: req.body.name,
            releaseDate: req.body.releasedate,
            summary: req.body.summary,
            director: req.body.director
        })
        .then(user => {
            res.redirect("/");
        })
}

module.exports.update = (req, res, next) => {
    movie.findByPk(req.params.id)
        .then(user => {
            res.render('movie-update', {
                data: user
            })
        });
}

// module.exports.updatePost = (req, res, next) => {
//     movie.findByPk(req.params.id)
//         .then(user => {
//             movie.update({
//                     name: req.body.name,
//                     releaseDate: req.body.releasedate,
//                     summary: req.body.summary,
//                     director: req.body.director
//                 }, {
//                     where: {
//                         id: req.params.id
//                     }
//                 })
//                 .then(count => {
//                     res.redirect('/');
//                 });
//         });
// }
module.exports.updatePost = async (req, res, next) => {
    var user = await movie.findByPk(req.params.id);
    await movie.update(
        {
            name: req.body.name,
            releaseDate: req.body.releasedate,
            summary: req.body.summary,
            director: req.body.director
        },
        {
            where: {id: req.params.id}
        }
    )
    res.redirect('/');
}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let user = await movie.findByPk(id);
    if (user) {
        await movie.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/");
    }
}