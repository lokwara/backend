const {check, validationResult} = require('express-validator');

exports.validateUserSignUp = [
    check('fullname')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Name is Required!')
    .isString()
    .withMessage('Must be a valid name!')
    .isLength({min: 3, max:20}).
    withMessage('Name must be within 3 to 20 Character!'),
    check('email').normalizeEmail().isEmail().withMessage('Invalid email'),
    check('password').trim().not().isEmpty().withMessage('Password is empty!').isLength({min: 8, max:20}).
    withMessage('Password must be 8 to 20 Characters long!'),
    check('confirmPassword').trim().not().isEmpty().custom((value, {req}) => {
        if (value !== req.body.password){
            throw new Error('Both pasword must be same');
        }
        return true;
    }),
];

exports.userVlidation = (req, res, next) => {
   const result =  validationResult(req).array();
   if(!result.length) return next();

   const error = result[0].msg;
   res.json({success: false, message: error});
};

exports.validateUserSign = [
    check('email').trim().isEmail().withMessage('email / password is required')
    ,
    check('password').trim().not().isEmpty().withMessage('email / Password is required'),
];