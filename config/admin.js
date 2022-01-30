module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0db2aa6087d0391bedd6b4e9b51011e1'),
  },
});
