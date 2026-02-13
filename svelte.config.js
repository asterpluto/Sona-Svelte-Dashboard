import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			// GitHub Pages serves at https://<user>.github.io/<repo>/
			base: dev ? '' : '/sona-Svelte'
		},
		prerender: {
			entries: ['/', '/dashboard', '/enterprises', '/login', '/robots', '/users'],
			handleHttpError: 'warn',
			handleUnseenRoutes: 'warn'
		},
		appDir: 'app'
	}
};

export default config;
