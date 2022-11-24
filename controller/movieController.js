const Movie = require('../model/movie');

module.exports.index = (req, res, next) => {
    Movie.findAll().then(movies => {
        res.render('movie-index', {
            data: movies,
            identity: req.identity.user
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('movie-create');
}

module.exports.createPost = (req, res, next) => {
    Movie.create({
            name: req.body.name,
            releaseDate: req.body.releasedate,
            summary: req.body.summary,
            director: req.body.director
        })
        .then(movieFromDb => {
            res.redirect("/");
        })
}

module.exports.update = async(req, res, next) => {
    Movie.findByPk(req.params.id)
        .then(movieFromDb => {
            res.render('movie-update', {
                data: movieFromDb
            });
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
    // var movie = await movie.findByPk(req.params.id);
    await Movie.update(
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
    let movieFromDb = await Movie.findByPk(id);
    if (movieFromDb != null) {
        await Movie.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/");
    }
}