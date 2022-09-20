const ROUTES = [
	{
		path: '/users',
		auth: false,
		author: false,
		proxy: {
			target: 'https://fakerapi.it/api/v1/persons',
			changeOrigin: true,
			pathRewrite: {
				[`^/users`]: '',
			}
		}
	},
	{
		path: '/companies',
		auth: false,
		author: false,
		proxy: {
			target: 'https://fakerapi.it/api/v1/companies',
			changeOrigin: true,
			pathRewrite: {
				[`^/companies`]: '',
			}
		}
	},
]

module.exports = ROUTES