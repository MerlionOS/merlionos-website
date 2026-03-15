// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://merlionos.org',
    integrations: [starlight({
        title: 'MerlionOS',
        logo: {
            light: './src/assets/logo-light.svg',
            dark: './src/assets/logo-dark.svg',
            replacesTitle: false,
        },
        social: [
            { icon: 'github', label: 'GitHub', href: 'https://github.com/MerlionOS' },
        ],
        customCss: ['./src/styles/custom.css'],
        sidebar: [
            {
                label: 'Getting Started',
                items: [
                    { label: 'Introduction', slug: 'getting-started/introduction' },
                    { label: 'Quick Start', slug: 'getting-started/quickstart' },
                    { label: 'Building from Source', slug: 'getting-started/building' },
                ],
            },
            {
                label: 'Architecture',
                items: [
                    { label: 'Overview', slug: 'architecture/overview' },
                    { label: 'Memory Management', slug: 'architecture/memory' },
                    { label: 'Process Management', slug: 'architecture/process' },
                    { label: 'Filesystem', slug: 'architecture/filesystem' },
                ],
            },
            {
                label: 'Development',
                items: [
                    { label: 'Contributing', slug: 'development/contributing' },
                    { label: 'Roadmap', slug: 'development/roadmap' },
                ],
            },
        ],
		}), sitemap()],
});