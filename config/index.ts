const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3005' : 'https://nextjs-blog.now.sh'