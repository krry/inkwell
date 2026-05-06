import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	// @ts-expect-error vitest 3 / vite 8 plugin type mismatch; runtime is fine
	plugins: [sveltekit()],
	build: {
		cssMinify: 'esbuild'
	},
	environments: {
		ssr: {
			build: {
				cssMinify: 'esbuild'
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
