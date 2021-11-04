var users = [];

module.exports = {
    create(user) {
        users.push(user);
        return true;
    },

    findByEmail(email) {
        let isOcuped = null;
        users.forEach(u => {
            if( u.user.email.toUpperCase() === email.toUpperCase())
            isOcuped = u;
        });
        return isOcuped;
    }
}