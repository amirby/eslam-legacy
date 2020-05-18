const router = require ('express').Router()

const auth = require('../middlewares/auth');
const handler = require ('../handlers')


router.get('/:id', handler.getFavourite);
router.delete('/:id', auth, handler.deleteFavourite);


module.exports = router;