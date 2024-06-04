import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    build: {
        sourcemap: true,
    },
    css: {
        devSourcemap: true,
    },
    plugins: [
        laravel({
            input: [
                'resources/scss/main.scss',
                'resources/js/site.ts',
            ],
            refresh: true,
        }),],
});
