module.exports = {
  apps: [
    {
      name: 'xyz-url-shortner-frontend',
      cwd: '/var/www/url-shortner/xyz-url-shortner-frontend',

      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',

      exec_mode: 'fork',   // IMPORTANT for Next.js
      instances: 1,        // keep it 1

      autorestart: true,
      watch: false,
      max_memory_restart: '500M',

      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
