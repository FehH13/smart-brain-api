const handleProfileGet = (req, res) => {
    const { id } = req.params;
    db('users').where({id})
    .then(user => {
        if(user.length){
            res.json(user[0]);
        } else {
            res.status(400).json('User not Found') 
        }
    })
    .catch(err => res.status(400).json('User Not Found'));
}

module.exports = {
    handleProfileGet
}